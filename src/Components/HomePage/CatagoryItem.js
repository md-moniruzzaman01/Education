import React from 'react';

const CatagoryItem = ({categorty}) => {
    const{id,picture,cetagory}=categorty
    return (
        <div className=''>
            
            <div className='flex flex-col justify-center items-center  shadow-md rounded-xl mx-9 my-7 py-5 '>
            <div className='m-7'>
                <img className='w-full' src={picture} alt="" />
            </div>
            <h1 className='text-xl  font-semibold text-gray-900'>{cetagory}</h1>
            </div>
        </div>
    );
};

export default CatagoryItem;