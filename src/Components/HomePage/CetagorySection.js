import React, { useEffect, useState } from 'react';
import CatagoryItem from './CatagoryItem';

const CetagorySection = () => {
    const [catagoryitem , setCatagoryItem]= useState([]);
    useEffect(()=>{
        fetch('catagory.json')
        .then(res => res.json())
        .then(data => setCatagoryItem(data))
    },[])
   
    return (
        <div className='min-h-screen my-24 container mx-auto font-poppins'>
            <div className='flex justify-between font-medium my-11'>
                <h1 className='text-3xl'>Course Categories</h1>
                <button className='text-2xl text-sky-400'>View All</button>
            </div>
            <div className='grid grid-cols-2 my-11 gap-3.5 lg:grid-cols-4 '>
                {
                   catagoryitem.map(categorty=> <CatagoryItem 
                    categorty={categorty}
                    key={categorty.id}
                   ></CatagoryItem>) 
                }
            </div>
            
        </div>
    );
};

export default CetagorySection;