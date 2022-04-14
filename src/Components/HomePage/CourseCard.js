import { faBookOpenReader, faClockFour, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CourseCard = ({course,itemCardbtnClickHandle}) => {
const {id,price,picture,category,name,company,hour,minutes}= course
    return (
        <div className='max-w-sm rounded-lg mx-auto border border-gray-200 shadow-md'>


            <div>
                <img className='rounded-t-lg' src={picture} alt="" />
            </div>
            <div className='p-4 text-gray-800'>
                <h1 className=' text-2xl   tracking-tight '>{category}</h1>
                <p className='mb-3 font-semibold text-gray-900'>by {name}</p>
                <div className='font-semibold flex justify-between'>
                <p className='text-semibold my-3'><FontAwesomeIcon className='mr-2' icon={faBookOpenReader}/>   12+ Lesson</p>
                <p><FontAwesomeIcon icon={faClockFour}/> {hour}hr {minutes}min </p>
                </div>
                <p className='text-amber-500'> 
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <span className='text-gray-800 mx-3'>(170)</span>
                    
                </p>
                <div className='my-3 flex justify-between'>
                    <h2 className='text-3xl'>{price}</h2>
                    <button onClick={()=>itemCardbtnClickHandle(id)} className='px-5 py-1 border-2 border-sky-400 rounded-3xl text-md  text-sky-400'>Details</button>
                </div>
            </div>







        </div>
    );
};

export default CourseCard;