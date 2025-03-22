import React from "react";
import Slider from "react-slick"; // Ensure you have react-slick installed
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true, // Enable arrows for next and previous
    fade: true,
    adaptiveHeight: true,
    prevArrow: (
      <button className="slick-prev absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-3 rounded-full opacity-80 hover:opacity-100 shadow-lg border-2 border-white">
        &#8592;
      </button>
    ),
    nextArrow: (
      <button className="slick-next absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-3 rounded-full opacity-80 hover:opacity-100 shadow-lg border-2 border-white">
        &#8594;
      </button>
    ),
  };

  return (
    <div className="sm:px-2 bg-red-300 lg:px-20 sm:pt-5 mx-auto lg:w-full h-[30vh] sm:h-[50vh] overflow-hidden text-white border-none">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="w-full h-full object-cover">
          <img
            className="w-full h-full"
            src="https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Poster 1"
          />
        </div>

        {/* Slide 2 */}
        <div className="w-full h-full object-cover">
          <img
            className="w-full h-full"
            src="https://content.jdmagicbox.com/comp/surat/dc/0261px261.x261.1238470097n7y2v9.dc/catalogue/creative-coaching-classes-adajan-road-surat-tutorials-oi7x877f5w.jpg"
            alt="Poster 2"
          />
        </div>

        {/* Slide 3 */}
        <div className="w-full h-full object-cover">
          <img
            className="w-full h-full"
            src="https://youthincmag.com/wp-content/uploads/2023/01/Features-20.jpg"
            alt="Poster 3"
          />
        </div>

        {/* Add other slides with similar responsive settings */}
      </Slider>
    </div>
  );
};

export default Carousel;
