import React from 'react'
import Hero from "./Hero";
import AvailableCourses from './AvailableCourses';
import MapLocation from './MapLocation';
import OurTeachers from './OurTeachers';
import PopularCourses from './PopularCourses';

const Home = () => {
  return (
    <div>
        <Hero />
        <PopularCourses/>
        <AvailableCourses />
        <OurTeachers />
        <MapLocation />
    </div>
  )
}

export default Home