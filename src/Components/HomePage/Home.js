import React from 'react';
import CetagorySection from './CetagorySection';
import CourseSection from './CourseSection';
import LandingSection from './LandingSection';
import { useEffect, useState } from 'react';
import Testimonials from './Testimonials';

const Home = () => {
 
    return (
        <div>
            <LandingSection></LandingSection>
            <CetagorySection  ></CetagorySection>
            <CourseSection></CourseSection>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;