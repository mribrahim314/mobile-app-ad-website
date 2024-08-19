import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import '../styling/AppScreenshots.css';

const AppScreenshots: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const screenshots = [
    'src/assets/slider/mobile1.png',
    'src/assets/slider/mobile2.png'
  ];

  const handleSelect = (selectedIndex: number) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="app-screenshots">
      <h2>شاهد التطبيق بالتفصيل</h2>
      <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
        {screenshots.map((screenshot, index) => (
          <Carousel.Item key={index}>
            <img src={screenshot} alt={`Screenshot ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="carousel-indicators-container">
        {screenshots.map((_, index) => (
          <div
            key={index}
            className={`carousel-indicator ${activeIndex === index ? 'active' : ''}`}
        
          />
        ))}
      </div>
    </div>
  );
};

export default AppScreenshots;
