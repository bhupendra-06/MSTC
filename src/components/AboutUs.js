import React from 'react'
import { BsPersonPlus } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";

function AboutUs() {
    return (
        <div id='#about'>
            <div className='flex flex-wrap justify-evenly my-10  px-18 pt-16'>
                <div className='py-4 max-w-md'>
                    <p className='pb-4'>ABOUT US</p>
                    <h3 className='text-4xl font-bold pb-4 leading-normal'>Mana's best <span className='text-green-500 inline-block '> Tuition Center </span> for quality Education</h3>
                    <p className='pb-5'>We are commited to providing personalized tuition classes that cater to the unique learning needs for each student.</p>
                    <h3 className='text-xl font-semibold pb-2'> <GiCheckMark className='inline text-green-500 text-2xl mb-2' /> Expert Teachers</h3>
                    <h3 className='text-xl font-semibold pb-2'> <GiCheckMark className='inline text-green-500 text-2xl mb-2' /> Flexible Timings</h3>
                    <h3 className='text-xl font-semibold pb-2'> <GiCheckMark className='inline text-green-500 text-2xl mb-2' /> Affordable Prices</h3>
                </div>
                <div >
                    <div className=''>
                        <img
                        className="rounded-lg"
                        src="/assets/about-img-1.jpg"
                        alt="about-img"
                        />
                    </div>
                    <div className='bg-white max-w-64 p-5 rounded-[15px_15px_50px_15px] flex relative -bottom-[-40px] items-center shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]'>
                        <span className='items-center bg-[#03ec8f30] text-3xl p-2 rounded-full text-[#03ec8d] mr-2'>
                            <BsPersonPlus/>
                        </span>
                        <div>
                            <h2 className='font-bold text-4xl pb-2'>20K+</h2>
                            <p className='text-xl text-[#454545]'>Enrolled Learners</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto py-6 mb-12'>
                    <div className='flex flex-wrap justify-evenly gap-7'>
                        <div className='bg-white px-8 py-6 rounded-lg min-w-64 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]'>
                            <h2 className='text-4xl font-bold text-center pb-1 text-[#FFC834]'>15496+</h2>
                            <p className='text-center text-[#5C5C5C]'>HAPPY PARENTS/STUDENTS </p>
                        </div>
                        <div className='bg-white px-8 py-6 rounded-lg min-w-64 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]'>
                            <h2 className='text-4xl font-bold text-center pb-1 text-[#f8771e]'>1.3M</h2>
                            <p className='text-center text-[#5C5C5C]'>CLASS COMPLETED</p>
                        </div>
                        <div className='bg-white px-8 py-6 rounded-lg min-w-64 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]'>
                            <h2 className='text-4xl font-bold text-center pb-1 text-[#13f59a]'>100%</h2>
                            <p className='text-center text-[#5C5C5C]'>SATISFACTION RATE</p>
                        </div>
                        <div className='bg-white px-8 py-6 rounded-lg min-w-64 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]'>
                            <h2 className='text-4xl font-bold text-center pb-1 text-[#63aaff]'>9875</h2>
                            <p className='text-center text-[#5C5C5C]'>CERTIFIED TUTORS</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;