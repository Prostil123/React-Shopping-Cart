// src/components/Slideshow.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    
    <Slider {...settings}>
      <div>
        <img src="https://static.digit.in/default/phones-7b7a41ee54.jpeg" height={"300px"} width={"100%"}  alt="Slide 1" />
      </div>
      <div>
        <img src="https://getfreedeals.co.in/wp-content/uploads/2019/05/amazon-clothing-sale.jpg" height={"300px"} width={"100%"}  alt="Slide 2" />
      </div>
      
    </Slider>
  );
};

export default Slideshow;
