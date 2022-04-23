import { faClone, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import testimonialImg from '../../image/image 38.png'

const Testimonials = () => {
    return (
        <div className='container mx-auto mb-24 font-poppins max-w-7xl'>
            <div className=' font-medium my-11 px-2'>
                <h1 className='text-2xl md:text-3xl'>Testimonials</h1>
               
            </div>
          <div className='grid grid-cols-2 mx-auto relative'>
          <div className='w-full '>
                <img className='h-full w-5/6' src={testimonialImg} alt="" />
            </div>
            <div className='bg-transparent absolute right-[100px] w-7/12'>
                <div className='text-gray-400 text-9xl ml-11'>
                <FontAwesomeIcon icon={faQuoteRight}/>
                </div>
                <div className='shadow-lg bg-white py-11 px-2 rounded-md '>
                    <p className=' border-b pb-11'>
                    "Thank you so much for your help. It's exactly what I've been looking for. You won't  regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."
                    </p>
                   <div className='flex justify-between mx-5 mt-5'>
                       <p className='font-semibold'>
                       Issabella
                       </p>
                   <div>
                   <p className='text-center text-amber-600'>
                       <FontAwesomeIcon icon={faStar}/> 
                       <FontAwesomeIcon icon={faStar}/> 
                       <FontAwesomeIcon icon={faStar}/> 
                       <FontAwesomeIcon icon={faStar}/> 
                       <FontAwesomeIcon icon={faStar}/> 
                       </p>
                       <p> 25 reviews at Yelp</p>
                   </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Testimonials;