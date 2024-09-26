import React, { useState, useEffect } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import series1 from '../../public/series.png';
import ekGaming from '../../public/ek-gaming.png';
import ekMultimedia from '../../public/ek-multimedia.png';
import ekOffice from '../../public/ek-office.png';
import PCNeutron from '../../public/PC-NEUTRON.png';
import Asus from '../../public/Asus.png';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(PCNeutron); 

  useEffect(() => {
    const images = [PCNeutron, Asus];
    let index = 0;

    const intervalId = setInterval(() => {
      index = (index + 1) % images.length; 
      setCurrentImage(images[index]);
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black"> 
      <Navbar />

      <div className="relative flex-grow w-full h-auto overflow-hidden">
        <img 
          src={currentImage} 
          alt="Slideshow" 
          className="w-full h-auto max-h-[calc(100vh-64px)] object-cover transition-transform duration-700 ease-in-out" 
        />
 
      </div>

      <div className="flex justify-center mt-10 mb-20">
        <div className="flex space-x-6"> 
          <img 
            src={series1} 
            alt="Series" 
            className="w-56 h-auto rounded transition-transform duration-300 transform hover:scale-110" 
          />
          <img 
            src={ekGaming} 
            alt="EK Gaming" 
            className="w-56 h-auto rounded transition-transform duration-300 transform hover:scale-110" 
          />
          <img 
            src={ekMultimedia} 
            alt="EK Multimedia" 
            className="w-56 h-auto rounded transition-transform duration-300 transform hover:scale-110" 
          />
          <img 
            src={ekOffice} 
            alt="EK Office" 
            className="w-56 h-auto rounded transition-transform duration-300 transform hover:scale-110" 
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
