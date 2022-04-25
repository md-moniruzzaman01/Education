import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCourse from '../../hooks/useCourse';
import CourseCard from '../HomePage/CourseCard';

const Coursepage = () => {
    const [popularCourse, setPopularCourse] =useCourse();
    const navigate = useNavigate()

    const itemCardbtnClickHandle=(id)=>{
            console.log('hello',id);
            navigate(`/course/${id}`)
    }

    return (
        <div className='flex justify-center items-center'>
               <div className='grid grid-cols-1 max-w-7xl mx-auto  gap-7 md:grid-cols-2 lg:grid-cols-3 px-2'>
               {
                    popularCourse?.map(course=> <CourseCard 
                        key={course.id}
                        course={course}
                        itemCardbtnClickHandle={itemCardbtnClickHandle}

                        ></CourseCard>)
               }
           </div>
        </div>
    );
};

export default Coursepage;