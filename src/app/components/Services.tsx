import React from 'react';
import { FaRegCalendarAlt, FaPalette, FaUtensils, FaCamera, FaBullhorn, FaTheaterMasks, FaMicrophone, FaLaptop, FaLightbulb, FaVolumeUp } from 'react-icons/fa';

const Services: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-100 shadow-md rounded-lg flex items-start">
            <FaRegCalendarAlt className="text-primary text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Event Planning</h2>
              <p className="text-gray-700 mb-4">
                Comprehensive event planning services for all types of occasions.
              </p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Business Party</li>
                <li>Child Party</li>
                <li>Babyshower</li>
                <li>Weddings</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-gray-100 shadow-md rounded-lg flex items-start">
            <FaPalette className="text-primary text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Decoration</h2>
              <p className="text-gray-700 mb-4">
                Unique and personalized decorations to make your event, business, or house stand out.
              </p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Event Decoration</li>
                <li>Business Decoration</li>
                <li>House Decoration</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-gray-100 shadow-md rounded-lg flex items-start">
            <FaUtensils className="text-primary text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Catering</h2>
              <p className="text-gray-700 mb-4">
                Exquisite catering services to delight your guests.
              </p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Corporate Events</li>
                <li>Private Parties</li>
                <li>Weddings</li>
                <li>Special Occasions</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-gray-100 shadow-md rounded-lg flex items-start">
            <FaCamera className="text-primary text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Photography & Video</h2>
              <p className="text-gray-700 mb-4">
                Professional photography and video services to capture every moment.
              </p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Event Photography</li>
                <li>Corporate Videos</li>
                <li>Weddings</li>
                <li>Special Occasions</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-gray-100 shadow-md rounded-lg flex items-start">
            <FaTheaterMasks className="text-primary text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Animator</h2>
              <p className="text-gray-700 mb-4">
                Engaging and entertaining animators to bring life to your event. Available only in Spanish.
              </p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Children's Parties</li>
                <li>Corporate Events</li>
                <li>Private Celebrations</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-gray-100 shadow-md rounded-lg flex items-start">
            <FaMicrophone className="text-primary text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Singer</h2>
              <p className="text-gray-700 mb-4">
                Talented singers to provide live music and entertainment for your event. Available only in Spanish.
              </p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Weddings</li>
                <li>Corporate Events</li>
                <li>Private Parties</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-gray-100 shadow-md rounded-lg flex items-start">
            <FaBullhorn className="text-primary text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Business Marketing</h2>
              <p className="text-gray-700 mb-4">
                Effective marketing solutions to promote your business.
              </p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Brand Strategy</li>
                <li>Social Media Management</li> {/* Incluimos manejo de redes sociales aquí */}
                <li>SEO Optimization</li>
                <li>Content Creation</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-gray-100 shadow-md rounded-lg flex items-start">
            <FaLaptop className="text-primary text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Web Developer</h2>
              <p className="text-gray-700 mb-4">
                Professional web development services to build and enhance your online presence.
              </p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Custom Website Design</li>
                <li>eCommerce Solutions</li>
                <li>Website Maintenance</li>
                <li>SEO Optimization</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-gray-100 shadow-md rounded-lg flex items-start">
            <FaVolumeUp className="text-primary text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Sound Equipment</h2>
              <p className="text-gray-700 mb-4">
                High-quality sound equipment for your events.
              </p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Speakers</li>
                <li>Microphones</li>
                <li>Mixing Consoles</li>
                <li>Amplifiers</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-gray-100 shadow-md rounded-lg flex items-start">
            <FaLightbulb className="text-primary text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Projectors & Lighting</h2>
              <p className="text-gray-700 mb-4">
                Professional projectors and lighting equipment to enhance your events.
              </p>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Projectors</li>
                <li>Stage Lighting</li>
                <li>Ambient Lighting</li>
                <li>Special Effects Lighting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
