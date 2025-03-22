import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurTeachers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 15,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    arrows: false,  // Hides next & previous buttons

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const teachers = [
    {
        name: "Dr. Anjali Sharma",
        subject: "Physics",
        qualification: "Ph.D. in Astrophysics",
        experience: "15 Years Exp",
        image: "https://randomuser.me/api/portraits/women/50.jpg",
      },
      {
        name: "Mr. Rajesh Gupta",
        subject: "Mathematics",
        qualification: "M.Sc in Mathematics",
        experience: "10 Years Exp",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      {
        name: "Ms. Priya Verma",
        subject: "Biology",
        qualification: "M.Sc in Biology",
        experience: "12 Years Exp",
        image: "https://randomuser.me/api/portraits/women/30.jpg",
      },
      {
        name: "Dr. Arvind Patel",
        subject: "Chemistry",
        qualification: "Ph.D. in Organic Chemistry",
        experience: "18 Years Exp",
        image: "https://randomuser.me/api/portraits/men/60.jpg",
      },
  ];

  return (
    <div className="max-w-[100vw] sm:max-w-5xl mx-4 sm:mx-auto py-5">
      <h2 className="text-3xl font-bold text-center mb-6">Meet Our <span className="text-orange-600">Teachers</span></h2>
      <Slider {...settings}>
        {teachers.map((teacher, index) => (
          <div key={index} className="p-10 sm:p-5 cursor-pointer duration-300 hover:scale-110">
            <div className="py-5 bg-blue-100 rounded-lg shadow-lg flex flex-col items-center text-center">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="my-5 w-32 h-32 object-cover rounded-full border-2 border-gray-300"
              />
              <h3 className="mt-3 text-xl font-semibold">{teacher.name}</h3>
              <p className="text-gray-600">{teacher.qualification}</p>
              <div className="mt-3 px-4 py-1 text-sm font-normal text-gray-600 bg-white rounded-lg shadow-sm">
                {teacher.experience}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurTeachers;
