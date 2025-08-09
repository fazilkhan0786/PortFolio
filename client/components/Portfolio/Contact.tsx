import { useState, useRef } from 'react';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import type { ContactFormData, EmailResponse } from '@shared/api';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullname: '',
    email: '',
    message: '',
  });
  
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  
  // Use ref to prevent double submissions
  const submissionInProgress = useRef(false);

  const validateForm = (data: ContactFormData) => {
    const errors: string[] = [];
    
    if (!data.fullname.trim()) {
      errors.push('Full name is required');
    } else if (data.fullname.trim().length > 100) {
      errors.push('Full name is too long');
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      errors.push('Email is required');
    } else if (!emailRegex.test(data.email.trim())) {
      errors.push('Please enter a valid email address');
    } else if (data.email.trim().length > 254) {
      errors.push('Email is too long');
    }
    
    if (!data.message.trim()) {
      errors.push('Message is required');
    } else if (data.message.trim().length < 10) {
      errors.push('Message must be at least 10 characters');
    } else if (data.message.trim().length > 2000) {
      errors.push('Message is too long (max 2000 characters)');
    }
    
    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    
    // Reset submit status when user starts typing
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setSubmitMessage('');
      setValidationErrors([]);
    }
    
    // Check form validity
    const errors = validateForm(newFormData);
    const isValid = errors.length === 0;
    setIsFormValid(isValid);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Prevent double submission
    if (!isFormValid || isSubmitting || submissionInProgress.current) {
      return;
    }

    // Final validation
    const errors = validateForm(formData);
    if (errors.length > 0) {
      setValidationErrors(errors);
      setSubmitStatus('error');
      setSubmitMessage('Please fix the errors below');
      return;
    }

    submissionInProgress.current = true;
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setValidationErrors([]);

    try {
      // Create a properly formatted copy of the form data with unique request ID
      const requestId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const dataToSend: ContactFormData = {
        fullname: formData.fullname.trim(),
        email: formData.email.trim().toLowerCase(),
        message: formData.message.trim()
      };

      console.log(`📤 Sending form data (${requestId}):`, dataToSend);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Request-ID': requestId,
        },
        body: JSON.stringify(dataToSend),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      console.log('📥 Response status:', response.status);
      console.log('📥 Response headers:', Object.fromEntries(response.headers.entries()));

      // Clone response to safely read body multiple times if needed
      const responseClone = response.clone();

      // Parse JSON response with proper error handling
      let result: EmailResponse;
      try {
        // Check if response is actually JSON
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          // If not JSON, read as text for debugging
          const responseText = await responseClone.text();
          console.log('📥 Non-JSON response text:', responseText);
          throw new Error('Server returned non-JSON response');
        }

        result = await response.json();
        console.log('📥 Response data:', result);
      } catch (parseError) {
        console.error('❌ Failed to parse response as JSON:', parseError);

        // Try to get text from clone for debugging
        try {
          const debugText = await responseClone.text();
          console.log('📥 Response text for debugging:', debugText);
        } catch (debugError) {
          console.log('📥 Could not read response text for debugging');
        }

        throw new Error('Invalid response from server');
      }

      if (!response.ok) {
        console.error('❌ HTTP error:', response.status, result);
        
        if (result.errors) {
          setValidationErrors(result.errors);
        }
        
        throw new Error(result.message || `HTTP error! status: ${response.status}`);
      }

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(result.message);
        // Reset form
        setFormData({ fullname: '', email: '', message: '' });
        setIsFormValid(false);
        console.log('✅ Form submitted successfully');
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message);
        if (result.errors) {
          setValidationErrors(result.errors);
        }
      }
    } catch (error) {
      console.error(`❌ Error sending email (${requestId}):`, error);

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          setSubmitMessage('Request timed out. Please try again.');
        } else if (error.name === 'TypeError' && error.message.includes('fetch')) {
          setSubmitMessage('Network error. Please check your internet connection.');
        } else if (error.message.includes('body stream already read')) {
          setSubmitMessage('Communication error. Please refresh the page and try again.');
        } else {
          setSubmitMessage(error.message || 'Failed to send message. Please try again.');
        }
      } else {
        setSubmitMessage('Unexpected error. Please refresh the page and try again.');
      }

      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      submissionInProgress.current = false;
    }
  };

  return (
    <article className="animate-fade-in">
      
      {/* Header */}
      <header className="mb-12">
        <h2 className="article-title">Get In Touch</h2>
        <p className="text-custom-md text-text-secondary">
          Have a project in mind? Let's discuss how we can work together
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Contact Info */}
        <div className="space-y-8">
          
          {/* Location Map */}
          <div className="modern-card p-0 overflow-hidden">
            <div className="h-64 lg:h-80 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8479535468544!2d72.95775131542056!3d23.59379998469758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e16f50bee95%3A0x8f4e2c3b7d9a1b6e!2sNear%20St%20Xavier's%20Educational%20Fraternity%2C%20R.T.O%20Circle%2C%20Himmatnagar-Vijapur%20Hwy%2C%20Himmatnagar%2C%20Gujarat%20383001!5e0!3m2!1sen!2sin!4v1640123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0 filter grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Near St Xavier's Educational Fraternity, R.T.O Circle, Himmatnagar- Vijapur Hwy, Himmatnagar, Gujarat, India"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-custom-md font-semibold text-text-primary mb-2">Location</h3>
              <p className="text-custom-sm text-text-secondary">
                Near St Xavier's Educational Fraternity, R.T.O Circle,<br />
                Himmatnagar-Vijapur Hwy, Himmatnagar, Sabarkantha<br />
                Gujarat 383001, India
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="modern-card p-6">
            <h3 className="text-custom-md font-semibold text-text-primary mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="icon-container w-10 h-10 text-white">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-custom-xs text-text-muted uppercase tracking-wide">Email</p>
                  <a 
                    href="mailto:malekfazilkhan07@gmail.com"
                    className="text-custom-sm text-accent-primary hover:text-accent-light transition-colors"
                  >
                    malekfazilkhan07@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="icon-container w-10 h-10 text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-custom-xs text-text-muted uppercase tracking-wide">Phone</p>
                  <a 
                    href="tel:+917990632170"
                    className="text-custom-sm text-accent-primary hover:text-accent-light transition-colors"
                  >
                    +91 79906 32170
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="modern-card p-6">
            <h3 className="text-custom-md font-semibold text-text-primary mb-4">Availability</h3>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-accent-primary rounded-full animate-pulse-slow"></div>
              <span className="text-custom-sm text-text-primary font-medium">Available for new projects</span>
            </div>
            <p className="text-custom-sm text-text-secondary">
              I typically respond within 24 hours and am open to discussing both remote and local opportunities.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="modern-card p-6 lg:p-8">
          <h3 className="text-custom-lg font-semibold text-text-primary mb-6">Send a Message</h3>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-accent-primary/10 border border-accent-primary/20 rounded-custom-md flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-accent-primary flex-shrink-0" />
              <p className="text-custom-sm text-accent-primary">{submitMessage}</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-custom-md">
              <div className="flex items-center gap-3 mb-2">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-custom-sm text-red-400">{submitMessage}</p>
              </div>
              {validationErrors.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {validationErrors.map((error, index) => (
                    <li key={index} className="text-custom-xs text-red-400 ml-8">
                      • {error}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullname" className="block text-custom-sm font-medium text-text-primary mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  className="w-full px-4 py-3 bg-card-secondary border border-border-custom rounded-custom-md text-text-primary placeholder-text-muted focus:border-accent-primary focus:outline-none transition-colors"
                  placeholder="Your full name"
                  required
                  maxLength={100}
                  value={formData.fullname}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  autoComplete="name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-custom-sm font-medium text-text-primary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-card-secondary border border-border-custom rounded-custom-md text-text-primary placeholder-text-muted focus:border-accent-primary focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                  required
                  maxLength={254}
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-custom-sm font-medium text-text-primary mb-2">
                Message * <span className="text-text-muted">({formData.message.length}/2000)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-card-secondary border border-border-custom rounded-custom-md text-text-primary placeholder-text-muted focus:border-accent-primary focus:outline-none transition-colors resize-y"
                placeholder="Tell me about your project, timeline, and any specific requirements..."
                required
                maxLength={2000}
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={!isFormValid || isSubmitting || submissionInProgress.current}
              className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-custom-md font-medium transition-all duration-300 ${
                isFormValid && !isSubmitting && !submissionInProgress.current
                  ? 'bg-gradient-primary text-white hover:scale-105 shadow-glow'
                  : 'bg-card-secondary text-text-muted cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            <p className="text-custom-xs text-text-muted text-center">
              Your message will be sent directly to my email. I'll respond within 24 hours.
            </p>

          </form>
        </div>

      </div>

    </article>
  );
}
