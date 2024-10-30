import React, { useState } from 'react';

const MapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setFormStatus('submitted');
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-800 text-gray-200 min-h-screen ">
      <div className="mx-auto flex flex-col gap-32 md:flex-row p-10 md:px-18 md:py-56 lg:px-24">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-group">
              <label htmlFor="name" className="block text-gray-400">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block text-gray-400">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="block text-gray-400">Message</label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className={`w-full p-2 rounded transition duration-200 
                ${formStatus === 'submitting' ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-700'} 
                text-white font-semibold`}
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {formStatus === 'submitted' && (
            <p className="mt-4 text-green-400">Thank you for your message. We'll be in touch soon!</p>
          )}
        </div>
        <div className="flex-1">
          <div className="mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977738682895!2d-122.41941658468212!3d37.77492977975945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1621436361986!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Google Maps"
              className="rounded-md"
            ></iframe>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapIcon className="text-blue-600" />
              <p>1355 Market St #900, San Francisco, CA 94103</p>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="text-blue-600" />
              <p>(555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-2">
              <MailIcon className="text-blue-600" />
              <p>contact@softgearsolutions.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
