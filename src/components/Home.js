import React from 'react'
import Hero from "./Hero";
import AvailableCourses from './AvailableCourses';
import MapLocation from './MapLocation';
import OurTeachers from './OurTeachers';
import PopularCourses from './PopularCourses';
import AboutUs from './AboutUs';

const Home = () => {
  return (
    <div>
        <Hero />
        <PopularCourses/>
        <AvailableCourses />
        <AboutUs/>
        <OurTeachers />
        <MapLocation />
    </div>
  )
}

export default Home