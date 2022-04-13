import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';

const CourseSection = () => {
    const [popularCourse, setPopularCourse] =useState([]);
    useEffect(()=>{
        fetch('courceData.json')
        .then(res => res.json())
        .then(data => setPopularCourse(data))
    },[])
    return (
        <div className='container mx-auto mb-24 max-w-7xl'>
            <div className='flex justify-between font-medium my-11 px-2'>
                <h1 className='text-2xl md:text-3xl'>Popular Course</h1>
                <button className='text-xl text-sky-400 md:text-2xl'>View All</button>
            </div>
           <div className='grid grid-cols-1 max-w-7xl mx-auto  gap-7 md:grid-cols-2 lg:grid-cols-3 px-2'>
               {
                    popularCourse.map(course=> <CourseCard 
                        course={course}

                        ></CourseCard>)
               }
           </div>
        </div>
    );
};

export default CourseSection;