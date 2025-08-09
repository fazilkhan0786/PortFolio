import { RequestHandler } from "express";
import { z } from "zod";
import nodemailer from "nodemailer";

// Validation schema for the contact form
const ContactFormSchema = z.object({
  fullname: z.string()
    .min(1, "Full name is required")
    .max(100, "Full name is too long")
    .trim(),
  email: z.string()
    .email("Invalid email address")
    .max(254, "Email is too long")
    .trim()
    .toLowerCase(),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long")
    .trim(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

export interface EmailResponse {
  success: boolean;
  message: string;
  errors?: string[];
}

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER || 'malekfazilkhan07@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD || 'your-app-password-here'
    }
  });
};

const createEmailTemplate = (data: ContactFormData) => {
  const sanitizedMessage = data.message
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>');
  
  const sanitizedName = data.fullname
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #10B981, #059669); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
        .footer { background: #374151; color: white; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; }
        .info-box { background: white; border-left: 4px solid #10B981; padding: 15px; margin: 10px 0; }
        .message-box { background: white; padding: 20px; border-radius: 8px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 New Portfolio Contact Message</h1>
        </div>
        
        <div class="content">
          <div class="info-box">
            <h3>Contact Information</h3>
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div class="message-box">
            <h3>Message</h3>
            <p>${sanitizedMessage}</p>
          </div>
        </div>
        
        <div class="footer">
          <p>This message was sent from your portfolio website contact form.</p>
          <p><small>Reply directly to this email to respond to ${sanitizedName}</small></p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const handleSendEmail: RequestHandler = async (req, res) => {
  // Set proper headers
  res.setHeader('Content-Type', 'application/json');
  
  try {
    console.log(`📨 ${req.method} ${req.path} - Processing contact form`);
    
    // Ensure the request method is POST
    if (req.method !== 'POST') {
      console.log('❌ Invalid method:', req.method);
      return res.status(405).json({
        success: false,
        message: "Method not allowed"
      } as EmailResponse);
    }

    // Log the raw body for debugging
    console.log('📧 Raw request body:', JSON.stringify(req.body, null, 2));
    console.log('📧 Content-Type:', req.get('Content-Type'));

    // Check if body exists and is not empty
    if (!req.body || Object.keys(req.body).length === 0) {
      console.log('❌ Empty or missing request body');
      return res.status(400).json({
        success: false,
        message: "Request body is required"
      } as EmailResponse);
    }

    // Validate the request body
    let validatedData: ContactFormData;
    try {
      validatedData = ContactFormSchema.parse(req.body);
      console.log('✅ Data validation successful for:', validatedData.email);
    } catch (validationError) {
      console.log('❌ Validation failed:', validationError);
      
      if (validationError instanceof z.ZodError) {
        const errors = validationError.errors.map(err => `${err.path.join('.')}: ${err.message}`);
        console.log('❌ Validation errors:', errors);
        
        return res.status(400).json({
          success: false,
          message: "Invalid form data. Please check your inputs.",
          errors: errors
        } as EmailResponse);
      }
      
      return res.status(400).json({
        success: false,
        message: "Invalid request format"
      } as EmailResponse);
    }
    
    // Check if email configuration is available
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.warn('⚠️ Email configuration not found. Message logged but not sent.');
      
      // Log the message for development
      console.log('📝 Contact form submission (dev mode):', {
        from: validatedData.email,
        name: validatedData.fullname,
        message: validatedData.message.substring(0, 100) + '...',
        timestamp: new Date().toISOString(),
      });
      
      const response: EmailResponse = {
        success: true,
        message: "Thank you for your message! I'll get back to you soon. (Development mode - email not sent)"
      };
      
      return res.status(200).json(response);
    }

    // Create transporter
    const transporter = createTransporter();
    
    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('✅ Email transporter verified successfully');
    } catch (verifyError) {
      console.error('❌ Email transporter verification failed:', verifyError);
      
      // In development, still return success to avoid blocking the UI
      const response: EmailResponse = {
        success: true,
        message: "Thank you for your message! I'll get back to you soon. (Email service temporarily unavailable)"
      };
      
      return res.status(200).json(response);
    }
    
    // Prepare email options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: 'malekfazilkhan07@gmail.com',
      replyTo: validatedData.email,
      subject: `Portfolio Contact: ${validatedData.fullname}`,
      html: createEmailTemplate(validatedData),
      text: `
New contact form submission:

Name: ${validatedData.fullname}
Email: ${validatedData.email}
Date: ${new Date().toLocaleString()}

Message:
${validatedData.message}

---
This message was sent from your portfolio website.
      `.trim()
    };
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);
    
    const response: EmailResponse = {
      success: true,
      message: "Thank you for your message! I'll get back to you soon."
    };

    res.status(200).json(response);
    
  } catch (error) {
    console.error('❌ Unexpected error processing contact form:', error);
    
    const response: EmailResponse = {
      success: false,
      message: "Sorry, there was an unexpected error. Please try again later."
    };
    
    res.status(500).json(response);
  }
};
