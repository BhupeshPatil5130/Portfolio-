import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';  // Import the EmailJS SDK

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email using EmailJS
    emailjs.sendForm(
      'your_service_id', // Replace with your EmailJS service ID
      'your_template_id', // Replace with your EmailJS template ID
      e.target, // The form element
      'your_user_id' // Replace with your EmailJS user ID
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      // Optionally, you can reset the form or show a success message
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      alert('Your message has been sent successfully!');
    }, (error) => {
      console.error('Error sending email:', error.text);
      alert('There was an error sending your message. Please try again.');
    });
  };

  return (
    <section id="contact" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeIn">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate__animated animate__fadeInLeft">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                    <FaPhone className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-neutral-900">Phone</h4>
                    <p className="text-neutral-600">+91 9404307254</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                    <FaEnvelope className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-neutral-900">Email</h4>
                    <p className="text-neutral-600">bhupeshsabe123@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-neutral-900">Location</h4>
                    <p className="text-neutral-600">Dhule Maharashtra India </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-neutral-900 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                 
                  <a href="#" className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                 
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate__animated animate__fadeInRight">
            <form id="contactForm" onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-neutral-900 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-neutral-900 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-neutral-900 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-neutral-900 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
