"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

const images = [
  "/event img/home-1.jpg",
  "/event img/slide2.jpg",
  "/event img/slide3.jpg",
  "/event img/slide4.jpg"
];

const Header: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative bg-white text-black h-96 overflow-hidden">
      <div >
        <div key={currentImage} >
          <Image
            src={images[currentImage]}
            alt="Event Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            className="animate-zoom-in-out"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text readability */}
        </div>
      </div>
      <div className="relative container mx-auto px-6 py-12 flex items-center z-10 h-full">
        <div className="text-left max-w-lg">
        <h1 className="mt-6 text-5xl font-bold text-white">
            Turning dreams into memorable moments
          </h1>
          <p className="mt-4 text-xl text-white">
          Proudly serving in{' '}
            <Typewriter
              words={[
                'New York',
                'New Jersey'
              ]}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block bg-white text-black hover:bg-primary hover:text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300"
          >
            Click here to get started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
