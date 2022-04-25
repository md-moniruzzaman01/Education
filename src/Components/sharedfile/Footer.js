import React from 'react';

const Footer = () => {
      const footerdate = new Date().getFullYear();



    return (
        <div className='mt-44 container mx-auto'>
            
         <div className='grid grid-cols-2  lg:grid-cols-4  mx-auto'>

         <div className='space-y-2 text-fontGray ml-7 md:ml-24 mb-7'>
        <div>
        <h2 className='text-xl text-headerColor  font-semibold text-gray-700 mb-3'>
                Edu<span className='text-sky-600'>skull</span>
                </h2>
                <p>About</p>
                <p>Blog</p>
                <p>Careers</p>
                <p>Contact Us</p>
        </div>
            </div>
            <div className='space-y-2 text-fontGray  ml-7 md:ml-24 mb-7'>
               <div>
               <h1 className='text-2xl font-semibold text-gray-700  mb-3'>Product</h1>
                <p>Clinical Board</p>
                <p>News</p>
                <p>Events</p>
                <p>Contact Us</p>
               </div>
            </div>
            <div className='space-y-2 text-fontGray  ml-7 md:ml-24 mb-7'>
              <div>
              <h1 className='text-2xl font-semibold  text-gray-700 mb-3'>Links</h1>
                    <p>Insta by Eduskul</p>
                    <p>Eduskull Profile</p>
                    <p>Eduskull Reachrce</p>
                    <p>Eduskull  Drive</p>
              </div>
                
            </div>
            <div className='space-y-2 text-fontGray  ml-7 md:ml-24 mb-7'>
               <div>
               <h1 className='text-2xl font-semibold text-gray-700  mb-3'>More</h1>
                    <p>Help</p>
                    <p>Developers</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
               </div>
                
            </div>

         </div>

        <div className='mt-11 text-center mb-5 justify-center text-lg font-medium block md:flex'>
            <p>&copy; {footerdate} || All Right Reserved</p>
          <p> by Mmr creation ltd.</p>
        </div>


        </div>
    );
};

export default Footer;