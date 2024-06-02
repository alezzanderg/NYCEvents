import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-700">
          We would love to hear from you. Please reach out to us using the information below.
        </p>
        
        {/* Form Section - Commented Out */}
        {/*
        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" rows={4}></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">Send</button>
        </form>
        */}

        {/* contact@nyceventssolution.com */}

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <FaEnvelope className="text-primary mr-2" /> Email
          </h3>
          <p className="text-gray-700">nyc.eventsolutions@gmail.com </p>
          
          <h3 className="text-xl font-semibold mt-4 mb-2 flex items-center">
            <FaPhone className="text-primary mr-2" /> Phone
          </h3>
          <p className="text-gray-700">(347) 288-2681</p>
          
          <h3 className="text-xl font-semibold mt-4 mb-2 flex items-center">
            <FaMapMarkerAlt className="text-primary mr-2" /> Address
          </h3>
          <p className="text-gray-700">123 Event Street, New York, NY 10001</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
