import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const Progilepage = () => {
    const auth = getAuth(app);
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);
    const prifileIcon = user?.email[0].toLocaleUpperCase()
    const logout = () => {
        signOut(auth);
        navigate('/')
      };
    return (
        <div>
            <div className='bg-sky-600 h flex justify-center items-center h-96'>
               <div className='flex flex-col justify-center items-center lg:flex-row ' >
               <div className=' bg-gray-300 rounded-full mr-0  w-44 h-44 flex justify-center items-center text-white font-semibold border-2 border-white text-6xl md:mr-16'> <h1>{prifileIcon}</h1> </div>
                <div className='flex flex-col justify-center mt-11 text-md space-y-3 text-white md:text-xl md:mt-0'>
                    <p>Name : <span className='font-medium'>{user?.displayName}</span></p>
                    <p>Email : <span className='font-medium'>{user?.email}</span></p>
                </div>
               </div>
            </div>
            <div className='mt-11  flex justify-end container mx-auto '> <button onClick={logout} className='bg-btnColor  px-7 py-2 rounded-3xl text-xl text-white font-medium mr-5 '>Logout</button> </div>
        </div>
    );
};

export default Progilepage;