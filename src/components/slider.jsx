import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function slider() {
    var settings = {
     
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 6000,
        cssEase: "linear",
        adaptiveHeight: true
      
      };
  return (
    <Slider {...settings}>
      <div>
        {/* add images here */}
        <img src="https://via.placeholder.com/180x100" alt="" />
      </div>
      <div>
      <img src="https://via.placeholder.com/180x100" alt="" />
      </div>
      <div>
      <img src="https://via.placeholder.com/180x100" alt="" />
      </div>
      <div>
      <img src="https://via.placeholder.com/180x100" alt="" />
      </div>
      <div>
      <img src="https://via.placeholder.com/180x100" alt="" />
      </div>
      <div>
      <img src="https://via.placeholder.com/180x100" alt="" />
      </div>
      <div>
      <img src="https://via.placeholder.com/180x100" alt="" />
      </div>
    </Slider>
  )
}
