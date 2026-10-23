'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'template-support',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please complete all required fields before submitting.');
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Honest email dispatch: trigger mailto link with encoded subject and body
    const subject = encodeURIComponent(`[GSG Inquiry] ${formData.inquiryType}: from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:contact@growthstackguide.com?subject=${subject}&body=${body}`;

    // Open user's default email client
    try {
      window.location.href = mailtoUrl;
    } catch {
      // fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-2xl bg-white border border-[var(--color-success)]/40 shadow-xs text-left space-y-4 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-12 h-12 rounded-full bg-[var(--color-success-bg)] text-[var(--color-success)] flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
        </div>
        <h3 className="font-heading font-extrabold text-xl text-[var(--text-dark)]">
          Inquiry Prepared!
        </h3>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed">
          Thank you for reaching out, <strong>{formData.name}</strong>. Your message has been prepared for dispatch to our editorial desk (<code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">contact@growthstackguide.com</code>).
        </p>
        <p className="text-xs text-[var(--text-light)]">
          If your email client did not automatically open, you can send your note directly to{' '}
          <a
            href={`mailto:contact@growthstackguide.com?subject=${encodeURIComponent('[GSG Inquiry] ' + formData.inquiryType)}`}
            className="font-bold text-[var(--purple-main)] underline"
          >
            contact@growthstackguide.com
          </a>.
        </p>
        <div className="pt-2 flex items-center gap-3">
          <a
            href={`mailto:contact@growthstackguide.com?subject=${encodeURIComponent('[GSG Inquiry] ' + formData.inquiryType)}`}
            className="px-4 py-2.5 rounded-lg bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs shadow-xs transition-colors"
          >
            Open in Email App
          </a>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                email: '',
                inquiryType: 'template-support',
                message: '',
              });
            }}
            className="px-4 py-2.5 rounded-lg bg-[#FAF8F2] hover:bg-[#F3EFE6] text-[var(--text-dark)] font-semibold text-xs border border-[var(--border-color)] transition-colors"
          >
            Send Another Note
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-white border border-[var(--border-color)] shadow-xs space-y-5 text-left">
      <div className="space-y-1">
        <h3 className="font-heading font-bold text-lg text-[var(--text-dark)]">
          Send Us a Direct Message
        </h3>
        <p className="text-xs text-[var(--text-muted)]">
          Fill out the form below and our editorial desk will be in touch shortly.
        </p>
      </div>

      {errorMessage && (
        <div className="p-3 rounded-xl bg-[var(--color-error-bg)] text-[var(--color-error)] text-xs flex items-center gap-2 border border-[var(--color-error)]/20">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Name Input */}
      <div className="space-y-1.5">
        <label htmlFor="contact-name" className="block text-xs font-bold text-[var(--text-dark)]">
          Your Name <span className="text-[var(--color-error)]">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          placeholder="e.g. Sarah Jenkins"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[var(--border-color)] text-xs sm:text-sm text-[var(--text-dark)] placeholder-[var(--text-light)] focus:outline-none focus:border-[var(--purple-main)] focus:ring-1 focus:ring-[var(--purple-main)] transition-colors"
        />
      </div>

      {/* Email Input */}
      <div className="space-y-1.5">
        <label htmlFor="contact-email" className="block text-xs font-bold text-[var(--text-dark)]">
          Your Email Address <span className="text-[var(--color-error)]">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="e.g. sarah@example.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[var(--border-color)] text-xs sm:text-sm text-[var(--text-dark)] placeholder-[var(--text-light)] focus:outline-none focus:border-[var(--purple-main)] focus:ring-1 focus:ring-[var(--purple-main)] transition-colors"
        />
      </div>

      {/* Inquiry Category */}
      <div className="space-y-1.5">
        <label htmlFor="contact-inquiryType" className="block text-xs font-bold text-[var(--text-dark)]">
          Topic / Category <span className="text-[var(--color-error)]">*</span>
        </label>
        <select
          id="contact-inquiryType"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[var(--border-color)] text-xs sm:text-sm text-[var(--text-dark)] focus:outline-none focus:border-[var(--purple-main)] focus:ring-1 focus:ring-[var(--purple-main)] transition-colors"
        >
          <option value="template-support">Template &amp; Technical Support</option>
          <option value="editorial-correction">Editorial Correction / Broken Link</option>
          <option value="software-review">Software Review Suggestion</option>
          <option value="general-inquiry">General Question or Feedback</option>
        </select>
      </div>

      {/* Message Textarea */}
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="block text-xs font-bold text-[var(--text-dark)]">
          Your Message <span className="text-[var(--color-error)]">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          placeholder="Please describe your question or feedback in detail..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[var(--border-color)] text-xs sm:text-sm text-[var(--text-dark)] placeholder-[var(--text-light)] focus:outline-none focus:border-[var(--purple-main)] focus:ring-1 focus:ring-[var(--purple-main)] transition-colors resize-y"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-5 rounded-xl bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center gap-2 disabled:opacity-50 min-h-[44px]"
      >
        {isSubmitting ? (
          <span>Sending Message...</span>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-[11px] text-[var(--text-light)] text-center">
        We respect your privacy. Zero spam, ever.
      </p>
    </form>
  );
}
