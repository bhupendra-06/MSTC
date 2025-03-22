import React from "react";
import Course from "./Course.js";

const AvailableCourses = () => {
  return (
    <div id="courses" className="pt-[70px] mx-2 sm:mx-10 lg:mx-auto max-w-5xl">
      <h2 className="mb-6 px-2 text-gray-600 text-3xl font-bold">
        Discover Available <span className="text-orange-600">Courses</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Course
        bgColor="bg-blue-200/75"
        textColor="text-blue-500"
        borderColor="border-blue-300"
        title="Complete Web Development"
        subtitle="Full-Stack Mastery"
        description="Become a full-stack developer with hands-on projects."
        buttonText="Start Learning"
        buttonColor="bg-blue-400"
        imageSrc="https://www.simplilearn.com/ice9/free_resources_article_thumb/full_stack_banner.jpg"
      />
      <Course
        bgColor="bg-yellow-200/75"
        textColor="text-yellow-500"
        borderColor="border-yellow-300"
        title="Mains to Advance"
        subtitle="IIT-JEE Coaching"
        description="Crack IIT-JEE with expert mentorship and structured learning."
        buttonText="Explore Now"
        buttonColor="bg-yellow-400"
        imageSrc="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Course
        bgColor="bg-green-200/75"
        textColor="text-green-500"
        borderColor="border-green-300"
        title="NEET Preparation"
        subtitle="Medical Entrance"
        description="Get ready for NEET with experienced faculty and practice tests."
        buttonText="Start Learning"
        buttonColor="bg-green-400"
        imageSrc="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Course
        bgColor="bg-blue-200/75"
        textColor="text-blue-500"
        borderColor="border-blue-300"
        title="Class 12 Science"
        subtitle="Physics, Chemistry & Maths"
        description="Master Class 12 Science subjects with in-depth explanations."
        buttonText="Explore Now"
        buttonColor="bg-blue-400"
        imageSrc="https://images.pexels.com/photos/4144227/pexels-photo-4144227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Course
        bgColor="bg-purple-200/75"
        textColor="text-purple-500"
        borderColor="border-purple-300"
        title="Class 12 Commerce"
        subtitle="Accountancy & Business Studies"
        description="Understand financial concepts with real-world examples."
        buttonText="Join Now"
        buttonColor="bg-purple-400"
        imageSrc="https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Course
        bgColor="bg-red-200/75"
        textColor="text-red-500"
        borderColor="border-red-300"
        title="High School Courses"
        subtitle="5th - 10th Standard"
        description="Strengthen your foundation with expert guidance."
        buttonText="Get Started"
        buttonColor="bg-red-400"
        imageSrc="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      </div>
    </div>
  );
};

export default AvailableCourses;
