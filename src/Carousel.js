import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./assets/banner1.jpg";
import image2 from "./assets/banner2.jpg";
import image3 from "./assets/banner3.jpg";
import image4 from "./assets/banner4.jpg";
import "./Carousel.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={image1} alt="" style={{ width: "100%", height: "50vh" }} />
      </div>
      <div>
        <img src={image2} alt="" style={{ width: "100%", height: "50vh" }} />
      </div>
      <div>
        <img src={image3} alt="" style={{ width: "100%", height: "50vh" }} />
      </div>
      <div>
        <img src={image4} alt="" style={{ width: "100%", height: "50vh" }} />
      </div>
    </Slider>
  );
}

export default Carousel;
