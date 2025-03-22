import React from 'react'
import Hero from "./Hero";
import AvailableCourses from './AvailableCourses';
import MapLocation from './MapLocation';
import OurTeachers from './OurTeachers';

const Home = () => {
  return (
    <div>
        <Hero />
        <AvailableCourses />
        <OurTeachers />
        <MapLocation />
    </div>
  )
}

export default Home