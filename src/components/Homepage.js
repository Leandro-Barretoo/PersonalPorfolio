import React, { useEffect } from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: '100vh',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};

const Homepage = () => {
  const carouselRef = React.useRef(null);

  useEffect(() => {
    const carouselContainer = carouselRef.current;

    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        carouselContainer.next();
      } else {
        carouselContainer.prev();
      }
    };

    carouselContainer.addEventListener('wheel', handleScroll);

    return () => {
      carouselContainer.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <Carousel dotPosition="left" ref={carouselRef}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};

export default Homepage;
