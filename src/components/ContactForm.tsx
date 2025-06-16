import React, { useState } from 'react';
import { Send } from 'lucide-react';
import axios from 'axios';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  service: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    location: 'HSR Layout',
    service: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Valid 10-digit phone number is required';
    }

    if (!formData.service) {
      newErrors.service = 'Service of interest is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await axios.post('https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/6XaI7s2C#generic-webhook', formData);
      alert('Form submitted successfully!');
      window.location.href = '/thank-you'; // Redirect to Thank You page
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#d25134]"
            placeholder="Enter your full name"
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#d25134]"
            placeholder="+91 9876543210"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#d25134]"
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Preferred Location *</label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#d25134]"
          >
            <option value="HSR Layout">HSR Layout</option>
            <option value="Banashankari">Banashankari</option>
          </select>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service of Interest *</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#d25134]"
          >
            <option value="">Select a service</option>
            <option value="prp">PRP Treatment</option>
            <option value="laser">Laser Hair Removal</option>
            <option value="facial">Medifacial</option>
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-3 bg-[#d25134] text-white font-semibold rounded-lg hover:bg-[#b8472e] transition-all duration-300 flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Submitting...
          </>
        ) : (
          <>
            <Send className="h-5 w-5 mr-2" /> Submit Inquiry
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;