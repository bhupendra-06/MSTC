import React from 'react'
import Hero from "./Hero";
import AvailableCourses from './AvailableCourses';
import MapLocation from './MapLocation';

const Home = () => {
  return (
    <div>
        <Hero />
        <AvailableCourses />
        <MapLocation />
    </div>
  )
}

export default Home