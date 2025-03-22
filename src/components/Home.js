import React from 'react'
import Hero from "./Hero";
import AvailableCourses from './AvailableCourses';
import MapLocation from './MapLocation';
import PopularCourses from './PopularCourses';

const Home = () => {
  return (
    <div>
        <Hero />
        <AvailableCourses />
        <PopularCourses/>
        <MapLocation />
    </div>
  )
}

export default Home