import { faChartSimple, faPlay, faSearch, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import loadingScreenImg from "../../image/loading screen.png";
import "./LandingSection.css";

const LandingSection = () => {
  return (
    <div className="bg-color">
      <div className="grid grid-cols-1 container font-poppins mx-auto lg:grid-cols-2">
        <div className="flex  items-center justify-center mt-11 ml-6 order-2 lg:order-1 md:ml-16">
          <div>
            <h1 className="font-poppins leading-snug mb-5 text-3xl font-bold text-neutral-800  md:text-5xl">
              Learning together,
              <span className="block"> we achieve great things.</span>
            </h1>
            <p className="text-xl md:text-3xl">Learn more skills, be more competitive</p>
            <div className="my-11 border-2 border-gray-700  w-11/12 flex items-center rounded-3xl lg:my-14 lg:w-4/6">
              <p className="text-gray-700 px-3">
                <FontAwesomeIcon icon={faSearch} /></p>
              <input className="w-8/12 h-14 p-2 text-xl bg-transparent focus:outline-none" type="search" name="" id="" />
              <button className="w-4/12 border-2 border-gray-700 h-11 my-1 ml-4 mr-2 rounded-3xl text-lg lg:w-3/12 lg:text-xl"> Search </button>
            </div>
            <div className="flex flex-col items-center justify-center my-14  lg:flex-row">
              <div>
              <button className="px-11 py-4 text-xl my-5 bg-btnColor text-white  font-normal  border-2 border-white rounded-3xl lg:px-9 lg:py-3 lg:text-lg">Get Started</button>

              </div>
              <div >
               
                <button className="flex items-center"> <span><FontAwesomeIcon className="bg-white  mr-3 px-5 py-4 text-2xl rounded-full text-sky-400 lg:ml-7" icon={faPlay} /></span> <span className="text-2xl lg:text-xl">Watch Videos</span></button>

              </div>
            </div>
          </div>
        </div>
        <div className="relative ml-auto w-full  order-1 lg:order-2 flex items-center justify-center">
        <div className="w-9/12  flex justify-center lg:w-full ">
        <img className="  max-h-[650px]  h-auto" src={loadingScreenImg} alt="" />
        </div>
        
          <p className="absolute top-24 right-7 bg-btnColor py-2 px-3 border-2 border-white rounded-xl text-white  text-3xl lg:right-20 lg:top-44"><FontAwesomeIcon icon={faChartSimple} /></p>
          <p className="absolute inset-y-1/2   btn-liner  flex items-center border-2 font-semibold text-gray-900 border-white rounded-xl left-0 px-4 py-7 text-xl  lg:left-[-100px] lg:px-7 lg:py-7 lg:text-2xl">75+ Course</p>
          <div className="absolute bottom-4 right-5 px-3 py-1 btn-liner  text-gray-900 border-2 border-white rounded-xl flex text-md lg:text-2xl lg:right-11"> <p className="px-3 rounded-2xl  bg-btnColor text-white flex items-center mx-3 text-2xl lg:text-4xl"><FontAwesomeIcon icon={faUserGraduate} /></p> <p>10,000+ <span className="block">  Students</span></p> </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default LandingSection;
