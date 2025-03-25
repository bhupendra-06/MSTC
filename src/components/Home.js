import React from 'react'
import Hero from "./Hero";
import AvailableCourses from './AvailableCourses';
import MapLocation from './MapLocation';
import OurTeachers from './OurTeachers';
import PopularCourses from './PopularCourses';
import AboutUs from './AboutUs';
import Contact from './Contact';
import  Events  from './Events';

const Home = () => {
  return (
    <div>
        <Hero />
        <PopularCourses/>
        <AboutUs />
        <AvailableCourses />
        <Events/>        
        <OurTeachers />
        <Contact />
        <MapLocation />
    </div>
  )
}

export default Home