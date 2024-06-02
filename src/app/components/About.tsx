import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-center items-center">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

        <section className="mb-8 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Mission</h2>
          <p className="text-gray-700">
            At NYC Events Solution, our mission is to turn visions into realities by offering comprehensive and personalized event solutions in New York City. We are committed to providing exceptional services that encompass everything from decoration and catering to photography and marketing, ensuring that every event is unique, memorable, and perfectly executed.
          </p>
        </section>

        <section className="mb-8 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Vision</h2>
          <p className="text-gray-700">
            Our vision is to become the leading event planning and management company in New York, recognized for our innovation, service excellence, and ability to exceed client expectations. We aspire to be the trusted partner for all event needs in the city, creating experiences that linger in the memories of our clients and their guests.
          </p>
        </section>

        <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Excellence:</strong> We strive to exceed expectations in everything we do, offering the highest quality services and paying attention to every detail to ensure perfection in every event.
            </li>
            <li>
              <strong>Innovation:</strong> We constantly seek new ideas and creative solutions to offer unique and personalized events, adapting to the latest trends and technologies in the event industry.
            </li>
            <li>
              <strong>Integrity:</strong> We act with honesty and transparency in all our interactions, maintaining high ethical standards and building relationships based on trust and mutual respect.
            </li>
            <li>
              <strong>Commitment:</strong> We are dedicated to fulfilling our commitments and working tirelessly to ensure client satisfaction, treating every event as if it were our own.
            </li>
            <li>
              <strong>Collaboration:</strong> We foster a teamwork environment both internally and with our clients and suppliers, believing that collaboration and joint efforts are key to success.
            </li>
            <li>
              <strong>Sustainability:</strong> We are committed to adopting sustainable and environmentally responsible practices, seeking to minimize our ecological impact and promote social responsibility in every aspect of our business.
            </li>
            <li>
              <strong>Diversity and Inclusion:</strong> We value and respect the diversity of our clients, employees, and partners, creating an inclusive environment that celebrates different cultures, ideas, and perspectives.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
