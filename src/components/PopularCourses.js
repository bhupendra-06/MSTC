import React from "react";

const PopularCourses = () => {
  const courses = [
    {
      title: "Short Term Courses",
      image: "/assets/course-item-1.png",
      bgColor: "bg-[#fbe099]",
      shadowColor: "hover:shadow-[4px_4px_0_#ffb700]",
    },
    {
      title: "Language Courses",
      image: "/assets/course-item-2.png",
      bgColor: "bg-[#FDAE77]",
      shadowColor: "hover:shadow-[4px_4px_0_#ff6a00]",
    },
    {
      title: "Coding Classes",
      image: "/assets/course-item-3.png",
      bgColor: "bg-[#9AFAD3]",
      shadowColor: "hover:shadow-[4px_4px_0_#3cb043]",
    },
    {
      title: "School Classes",
      image: "/assets/course-item-4.png",
      bgColor: "bg-[#D4DEFF]",
      shadowColor: "hover:shadow-[4px_4px_0_#0077ff]",
    },
  ];

  return (
    <section className="px-7 pt-10 sm:relative -top-20">
      <div className="bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/40 md:border md:border-gray-200/75 rounded-xl px-8 py-6 max-w-5xl mx-auto shadow-[0_5px_0_0_#aaa9a94a]">
        <div className="px-4 py-1 bg-[#ffb800] rounded-full inline-block mb-4">
          <div className="text-lg text-white font-semibold">
            Popular Courses
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`rounded-md flex justify-between cursor-pointer transition-shadow duration-500 ease-in-out group ${course.bgColor} ${course.shadowColor}`}
            >
              <div className="pl-4 pt-2 w-1/2 font-semibold text-[#5C5C5C]">
                {course.title}
              </div>
              <div>
                <img
                  className="transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:-translate-y-3.5 h-full w-fit object-fit"
                  src={course.image}
                  alt={`course-item-${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
