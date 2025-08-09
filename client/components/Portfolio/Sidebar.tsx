import { useState } from 'react';
import { ChevronDown, Mail, Phone, Calendar, MapPin, ExternalLink } from 'lucide-react';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/fazilkhan0786',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/fazilkhan-malek-392082377/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/fazilkhan_078',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'malekfazilkhan07@gmail.com',
      href: 'mailto:malekfazilkhan07@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 79906 32170',
      href: 'tel:+917990632170'
    },
    {
      icon: Calendar,
      label: 'Birthday',
      value: 'May 02, 2007',
      href: null
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Himmatnagar, Gujarat, India',
      href: null
    }
  ];

  return (
    <aside className={`modern-card p-6 transition-all duration-500 overflow-hidden ${
      isExpanded ? 'max-h-[800px]' : 'max-h-48'
    } lg:max-h-none animate-slide-in`}>
      
      {/* Profile Section */}
      <div className="flex items-center gap-4 lg:flex-col lg:text-center">
        
        {/* Avatar with Your Professional Photo */}
        <div className="relative flex-shrink-0">
          <div className="w-20 h-20 lg:w-32 lg:h-32 rounded-custom-xl overflow-hidden ring-2 ring-accent-primary/20 bg-gradient-to-br from-accent-primary/10 to-accent-light/10">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2Fc193e7a040354717b85c7958058dc838%2F983e8a22e68f4b27b2e6f77447168364?format=webp&width=400" 
              alt="FazilKhan Malek - Professional Photo" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to a professional placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Cpath d='M200 180c-22.091 0-40-17.909-40-40s17.909-40 40-40 40 17.909 40 40-17.909 40-40 40zm0 20c53.019 0 96 42.981 96 96v44H104v-44c0-53.019 42.981-96 96-96z' fill='%236b7280'/%3E%3C/svg%3E";
              }}
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 lg:w-8 lg:h-8 bg-accent-primary rounded-full border-2 border-card-bg flex items-center justify-center">
            <div className="w-2 h-2 lg:w-3 lg:h-3 bg-white rounded-full animate-pulse-slow"></div>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 lg:flex-none lg:mt-4">
          <h1 className="text-custom-lg lg:text-custom-xl font-semibold text-text-primary mb-2">
            FazilKhan Malek
          </h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-primary rounded-full text-custom-xs font-medium text-dark-bg">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            Computer Engineering Student
          </div>
        </div>

        {/* Toggle Button */}
        <button 
          className="lg:hidden p-2 rounded-custom-md bg-card-secondary border border-border-custom hover:border-accent-primary transition-colors"
          onClick={toggleSidebar}
        >
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Expandable Content */}
      <div className={`transition-all duration-500 ${isExpanded ? 'opacity-100 visible mt-6' : 'opacity-0 invisible mt-0 lg:opacity-100 lg:visible lg:mt-6'}`}>
        
        {/* Separator */}
        <div className="separator"></div>

        {/* Contact Information */}
        <div className="space-y-4 mb-6">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-3 group">
              <div className="icon-container w-10 h-10 text-white">
                <item.icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-custom-xs text-text-muted uppercase tracking-wide mb-1">
                  {item.label}
                </p>
                {item.href ? (
                  <a 
                    href={item.href} 
                    className="text-custom-sm text-text-secondary hover:text-accent-primary transition-colors block truncate"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-custom-sm text-text-secondary">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="separator"></div>

        {/* Social Links */}
        <div className="space-y-3">
          <h3 className="text-custom-sm font-medium text-text-primary mb-3">Connect</h3>
          <div className="flex flex-col gap-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-custom-md bg-card-secondary border border-border-custom hover:border-accent-primary hover:bg-accent-primary/5 transition-all duration-300 group"
              >
                <div className="text-text-muted group-hover:text-accent-primary transition-colors">
                  {social.icon}
                </div>
                <span className="text-custom-sm text-text-secondary group-hover:text-accent-primary transition-colors flex-1">
                  {social.name}
                </span>
                <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-accent-primary transition-colors opacity-0 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>

      </div>

    </aside>
  );
}
