import React from 'react'
import Hero from "./Hero";
import AvailableCourses from './AvailableCourses';
import MapLocation from './MapLocation';
import PopularCourses from './PopularCourses';
import AboutUs from './AboutUs';

const Home = () => {
  return (
    <div>
        <Hero />
        <AvailableCourses />
        <PopularCourses/>
        <AboutUs/>
        {/* <MapLocation /> */}
    </div>
  )
}

export default Home