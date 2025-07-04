import React, { useState, useRef } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import emailjs from '@emailjs/browser';

export const ContactForm: React.FC = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (form.current) {
        await emailjs.sendForm(
          'service_r2jv3l4', // Replace with your EmailJS service ID
          'template_8fh9e9b', // Replace with your EmailJS template ID
          form.current,
          'p6jN_pRoIZRzZOss9' // Replace with your EmailJS public key
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
  );
};
