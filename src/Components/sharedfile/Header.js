import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import CustomLink from '../othersFile/CustomLink';

const Header = () => {
    const [open ,setopen ] = useState(false)
   
       
    return (
        <div className='flex justify-between px-2 h-14 items-center container mx-auto'>
            <div>
                <h2 className='text-2xl text-headerColor  font-semibold'>
                Edu<span className='text-sky-600'>skull</span>
                </h2>
            </div>
            

       
       <div onClick={()=> setopen(!open)} className='h-6 w-8 md:hidden'>
           {open? <FontAwesomeIcon icon={faCoffee} />: <FontAwesomeIcon icon={faCoffee} />}
           </div>


        
         <ul className={` sm:static z-10  md:flex sm:py-8 md:py-0 items-center  justify-end md:w-10/12 w-full duration-500 ease-in-out  lg:bg-none  absolute ${ open ? 'top-11 left-0 ' : 'top-[-1200px]'} `}>
        
         <li><CustomLink className=' mr-3 pl-2' to="/">Home</CustomLink></li>
         <li><CustomLink className=' mr-3 pl-2' to="/downloads">Downloads</CustomLink></li>
         <li><CustomLink className=' mr-3 pl-2' to="/contact">Contact us</CustomLink></li>
         <li><CustomLink className=' mr-3 pl-2' to="/about">About</CustomLink></li>
           </ul>
       </div>
       
           
          
        
    );
};

export default Header;