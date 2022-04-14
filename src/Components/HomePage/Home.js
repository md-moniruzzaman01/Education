import React from 'react';
import CetagorySection from './CetagorySection';
import CourseSection from './CourseSection';
import LandingSection from './LandingSection';
import { useEffect, useState } from 'react';

const Home = () => {
 
    return (
        <div>
            <LandingSection></LandingSection>
            <CetagorySection  ></CetagorySection>
            <CourseSection></CourseSection>
        </div>
    );
};

export default Home;