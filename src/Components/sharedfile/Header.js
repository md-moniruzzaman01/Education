import { faBars, faCoffee, faHamburger, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import CustomLink from '../othersFile/CustomLink';

const Header = () => {
    const navigate = useNavigate()
    const [open ,setopen ] = useState(false)
    const auth = getAuth(app);
    const [user, loading, error] = useAuthState(auth);
    const prifileIcon = user?.email[0].toLocaleUpperCase()


    const navigateTo=()=>{
        navigate('/profile')
    }








       
    return (
        <div className='flex justify-between px-2 h-16 items-center container mx-auto'>
            <div>
                <h2 className='text-2xl text-headerColor  font-semibold'>
                Edu<span className='text-sky-600'>skull</span>
                </h2>
            </div>
            

       
       <div onClick={()=> setopen(!open)} className='h-6 w-8 md:hidden'>
           {open? <FontAwesomeIcon icon={faXmark} />: <FontAwesomeIcon icon={faBars} />}
           </div>


        
         <ul className={` sm:static z-10  md:flex sm:py-8 md:py-0 items-center bg-white py-4 justify-end md:w-10/12 w-full duration-500 ease-in-out  lg:bg-none  absolute ${ open ? 'top-11 left-0 ' : 'top-[-1200px]'} `}>
        
           <div className='lg:flex justify-between w-10/12 '>


           <div className='lg:flex justify-evenly  items-center w-6/12'>
            <li><CustomLink className=' mr-3 pl-2' to="/">Home</CustomLink></li>
            <li><CustomLink className=' mr-3 pl-2' to="/downloads">Downloads</CustomLink></li>
            <li><CustomLink className=' mr-3 pl-2' to="/contact">Contact us</CustomLink></li>
            <li><CustomLink className=' mr-3 pl-2' to="/about">About</CustomLink></li>
            </div>
            {
                user? <div onClick={navigateTo} className='bg-btnColor px-3  text-sky-300 font-medium  py-2 rounded-full  text-2xl'><h1 >{prifileIcon}</h1></div> : 
                <div className='flex items-center '>

                <li> <Link to="/login" className='mr-4 pl-2   text-md text-medium border-r-2  border-gray-500 pr-3'>login</Link> </li>
                <li><Link  className='bg-headerColor  px-6 border-2  py-2 text-md font-medium text-white rounded-3xl ' to='/register'>Register</Link>  </li>
            </div>
            }




           </div>
        </ul>
       </div>
       
           
          
        
    );
};

export default Header;