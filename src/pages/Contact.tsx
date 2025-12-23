import { useState } from 'react';
import { validateContactForm } from '../utils/validation';
import { submitContactForm } from '../utils/supabase';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'web-development',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    { label: 'Web Development', value: 'web-development', color: 'bg-brutal-blue' },
    { label: 'Social Media Marketing', value: 'social-media-marketing', color: 'bg-brutal-pink' },
    { label: 'Branding & Design', value: 'branding-design', color: 'bg-brutal-yellow' },
    { label: 'Content Creation', value: 'content-creation', color: 'bg-brutal-green' },
    { label: 'Other', value: 'other', color: 'bg-neutral-200' }
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContactForm({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    });

    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    try {
      await submitContactForm(formData as ContactFormData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'web-development',
        message: ''
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-brutal-bg">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="brutal-tag-blue mb-6 inline-block">
            ✦ Contact
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-brutal-black mb-6 tracking-tight">
            Let's <span className="highlight-pink">talk</span>
          </h1>
          <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed font-medium">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitSuccess && (
              <div className="mb-8 p-6 bg-brutal-green border-4 border-brutal-black rounded-brutal shadow-brutal animate-fade-in">
                <p className="font-black text-brutal-black text-lg mb-1">Message sent! ✓</p>
                <p className="text-brutal-black font-medium">Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="border-4 border-brutal-black rounded-brutal bg-white shadow-brutal p-8 md:p-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-black text-brutal-black mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`brutal-input ${errors.name ? 'border-brutal-pink bg-brutal-pink/10' : ''}`}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="mt-2 text-sm font-bold text-brutal-pink">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-black text-brutal-black mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`brutal-input ${errors.email ? 'border-brutal-pink bg-brutal-pink/10' : ''}`}
                    placeholder="your@email.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="mt-2 text-sm font-bold text-brutal-pink">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-black text-brutal-black mb-3">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`brutal-input ${errors.phone ? 'border-brutal-pink bg-brutal-pink/10' : ''}`}
                    placeholder="(123) 456-7890"
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <p className="mt-2 text-sm font-bold text-brutal-pink">{errors.phone}</p>}
                </div>

                {/* Service Field */}
                <div>
                  <label htmlFor="service" className="block text-sm font-black text-brutal-black mb-3">
                    Service
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="brutal-input appearance-none cursor-pointer"
                    >
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-brutal-black font-bold">
                      ↓
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-black text-brutal-black mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`brutal-input resize-none ${errors.message ? 'border-brutal-pink bg-brutal-pink/10' : ''}`}
                  placeholder="Tell us about your project..."
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="mt-2 text-sm font-bold text-brutal-pink">{errors.message}</p>}
              </div>

              {errors.submit && (
                <div className="p-4 bg-brutal-pink border-4 border-brutal-black rounded-xl">
                  <p className="text-brutal-black font-bold">{errors.submit}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="brutal-button-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  'Send Message →'
                )}
              </button>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <div className="border-4 border-brutal-black rounded-brutal bg-white shadow-brutal p-8">
              <h3 className="font-black text-xl text-brutal-black mb-6">Contact Info</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-bold text-neutral-500 mb-2">Email</p>
                  <a
                    href="mailto:hello@croft.studio"
                    className="text-lg font-bold text-brutal-black hover:text-brutal-pink transition-colors"
                  >
                    hello@croft.studio
                  </a>
                </div>

                <div className="pt-6 border-t-4 border-brutal-black">
                  <p className="text-sm font-bold text-neutral-500 mb-2">Location</p>
                  <p className="text-lg font-bold text-brutal-black">Remote-First Team</p>
                  <p className="text-neutral-600 font-medium mt-1">Serving clients worldwide 🌍</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-brutal-yellow border-4 border-brutal-black rounded-brutal p-6 shadow-brutal">
              <p className="font-black text-brutal-black mb-4">Quick Response</p>
              <p className="text-brutal-black font-medium">We typically respond within 24 hours during business days.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
