import React from "react";
import { Link } from "react-router-dom";

const Course = ({
  bgColor = "bg-yellow-200/75",
  textColor = "text-yellow-500",
  title,
  subtitle,
  description,
  buttonText = "Explore Now",
  buttonColor = "bg-yellow-400",
  imageSrc,
  borderColor,
}) => {
  return (
    <div
      className={`m-2 p-5 flex flex-wrap sm:flex-nowrap gap-4 items-center justify-between ${bgColor} rounded-xl duration-500 hover:shadow-md hover:shadow-gray-400 relative overflow-hidden`}
    >
      <div className="sm:w-3/5">
        <p className={`text-xl sm:text-2xl font-semibold ${textColor}`}>{title}</p>
        <h3 className="mt-2 text-gray-600 text-3xl font-bold">{subtitle}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <Link to="/courses">
          <button
            className={`mt-4 px-5 py-2 text-lg text-white font-medium ${buttonColor} rounded-md cursor-pointer duration-300 hover:shadow-md hover:shadow-gray-400`}
          >
            {buttonText}
          </button>
        </Link>
      </div>
      <div className="p-2 w-fit bg-white border rounded-full">
        <img
          className="w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-full"
          src={imageSrc}
          alt="course-img"
        />
      </div>
      <span className={`hidden md:block w-10 h-10 border-[5px] ${borderColor} rounded-full absolute right-48 top-10`}></span>
      <span className={`hidden md:block w-32 h-32 border-[12px] ${borderColor} rounded-full absolute -right-16 -bottom-16`}></span>
    </div>
  );
};

export default Course;
