import React, { useState, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { AnimatedBackground } from '../AnimatedBackground';
import { Footer } from '../Footer';
import WaveSeparator from '../WaveSeparator';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const { theme } = useTheme();
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (form.current) {
        await emailjs.sendForm(
          'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          form.current,
          'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
        );
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <>
      <div className="min-h-screen" style={{ backgroundColor: theme.colors.primary.bg }}>
        <AnimatedBackground variant="particles" />
        
        {/* Header Section */}
        <section className="pt-32 pb-20 relative">
          <div className="container mx-auto px-8 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: theme.colors.primary.text }}>
                Get In Touch
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: theme.colors.neutral.textSecondary }}>
                Ready to bring your project to life? Let's discuss how I can help you create something amazing.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 relative">
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6" style={{ color: theme.colors.primary.text }}>
                    Let's Start a Conversation
                  </h2>
                  <p className="text-lg mb-8" style={{ color: theme.colors.neutral.textSecondary }}>
                    Whether you need a new website, want to revamp your existing one, or have a project in mind, 
                    I'm here to help. I work closely with my clients to understand their vision and deliver 
                    results that exceed expectations.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: theme.colors.accent.primary + '20' }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill={theme.colors.accent.primary}>
                        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: theme.colors.secondary.text }}>
                        Email
                      </h3>
                      <a 
                        href="mailto:abror.habibov03@gmail.com"
                        className="text-lg transition-colors duration-200"
                        style={{ color: theme.colors.accent.primary }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.textDecoration = 'underline';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.textDecoration = 'none';
                        }}
                      >
                        abror.habibov03@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: theme.colors.accent.primary + '20' }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill={theme.colors.accent.primary}>
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: theme.colors.secondary.text }}>
                        GitHub
                      </h3>
                      <a 
                        href="https://github.com/abrorkhabibov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg transition-colors duration-200"
                        style={{ color: theme.colors.accent.primary }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.textDecoration = 'underline';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.textDecoration = 'none';
                        }}
                      >
                        github.com/abrorkhabibov
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: theme.colors.accent.primary + '20' }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill={theme.colors.accent.primary}>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: theme.colors.secondary.text }}>
                        LinkedIn
                      </h3>
                      <a 
                        href="https://linkedin.com/in/AbrorKhabibov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg transition-colors duration-200"
                        style={{ color: theme.colors.accent.primary }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.textDecoration = 'underline';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.textDecoration = 'none';
                        }}
                      >
                        linkedin.com/in/AbrorKhabibov
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Response Info */}
                <div 
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: theme.colors.secondary.bg }}
                >
                  <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.secondary.text }}>
                    Quick Response
                  </h3>
                  <p style={{ color: theme.colors.neutral.text }}>
                    I typically respond to all inquiries within 24 hours. For urgent projects, 
                    feel free to reach out directly via email or LinkedIn.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div 
                  className="p-8 rounded-2xl shadow-lg"
                  style={{ backgroundColor: theme.colors.secondary.bg }}
                >
                  <h2 className="text-2xl font-bold mb-6" style={{ color: theme.colors.secondary.text }}>
                    Send me a message
                  </h2>

                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label 
                          htmlFor="user_name" 
                          className="block text-sm font-medium mb-2"
                          style={{ color: theme.colors.secondary.text }}
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="user_name"
                          name="user_name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                          style={{
                            backgroundColor: theme.colors.primary.bg,
                            borderColor: theme.colors.neutral.border,
                            color: theme.colors.primary.text,
                          }}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label 
                          htmlFor="user_email" 
                          className="block text-sm font-medium mb-2"
                          style={{ color: theme.colors.secondary.text }}
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="user_email"
                          name="user_email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                          style={{
                            backgroundColor: theme.colors.primary.bg,
                            borderColor: theme.colors.neutral.border,
                            color: theme.colors.primary.text
                          }}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label 
                        htmlFor="subject" 
                        className="block text-sm font-medium mb-2"
                        style={{ color: theme.colors.secondary.text }}
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: theme.colors.primary.bg,
                          borderColor: theme.colors.neutral.border,
                          color: theme.colors.primary.text
                        }}
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="message" 
                        className="block text-sm font-medium mb-2"
                        style={{ color: theme.colors.secondary.text }}
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 resize-none"
                        style={{
                          backgroundColor: theme.colors.primary.bg,
                          borderColor: theme.colors.neutral.border,
                          color: theme.colors.primary.text
                        }}
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      style={{
                        backgroundColor: isSubmitting ? theme.colors.neutral.border : theme.colors.accent.primary,
                        color: theme.colors.button.primary.text
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div 
                        className="p-4 rounded-lg text-center animate-pulse"
                        style={{ backgroundColor: '#10B981' + '20', color: '#10B981' }}
                      >
                        ✅ Thank you! Your message has been sent successfully. I'll get back to you soon!
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div 
                        className="p-4 rounded-lg text-center animate-pulse"
                        style={{ backgroundColor: '#EF4444' + '20', color: '#EF4444' }}
                      >
                        ❌ Sorry, there was an error sending your message. Please try again or contact me directly via email.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Contact Info Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8" style={{ color: theme.colors.primary.text }}>
                Other Ways to Connect
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: theme.colors.accent.primary + '20' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill={theme.colors.accent.primary}>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.secondary.text }}>
                    Quick Response
                  </h3>
                  <p style={{ color: theme.colors.neutral.text }}>
                    I respond to all messages within 24 hours
                  </p>
                </div>

                <div className="text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: theme.colors.accent.primary + '20' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill={theme.colors.accent.primary}>
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.secondary.text }}>
                    Free Consultation
                  </h3>
                  <p style={{ color: theme.colors.neutral.text }}>
                    15-minute call to discuss your project needs
                  </p>
                </div>

                <div className="text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: theme.colors.accent.primary + '20' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill={theme.colors.accent.primary}>
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.secondary.text }}>
                    Flexible Schedule
                  </h3>
                  <p style={{ color: theme.colors.neutral.text }}>
                    Available for meetings across different time zones
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <WaveSeparator topColor="var(--color-primary-bg)" botColor="var(--color-secondary-bg)" />
      <Footer />
    </>
  );
};