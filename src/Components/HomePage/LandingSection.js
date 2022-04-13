import { faChartSimple, faPlay, faSearch, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import loadingScreenImg from "../../image/loading screen.png";
import "./LandingSection.css";

const LandingSection = () => {
  return (
    <div className="bg-color">
      <div className="grid grid-cols-1 container font-poppins mx-auto lg:grid-cols-2">
        <div className="flex  items-center mt-11 ml-16 order-2 lg:order-1">
          <div>
            <h1 className="font-poppins leading-snug mb-5 text-5xl font-bold text-neutral-800">
              Learning together,
              <span className="block"> we achieve great things.</span>
            </h1>
            <p className="text-3xl">Learn more skills, be more competitive</p>
            <div className="my-14 border-2 border-gray-700  w-4/6 flex items-center rounded-3xl">
              <p className="text-gray-700 px-3">
                <FontAwesomeIcon icon={faSearch} /></p>
              <input className="w-8/12 h-14 p-2 text-xl bg-transparent focus:outline-none" type="search" name="" id="" />
              <button className="w-3/12 border-2 border-gray-700 h-11 my-1 ml-4 mr-2 rounded-3xl text-xl"> Search </button>
            </div>
            <div className="flex items-center my-14 ">
              <div>
              <button className="px-9 py-3 text-lg bg-btnColor text-white  font-normal  border-2 border-white rounded-3xl">Get Started</button>

              </div>
              <div >
               
                <button className="flex items-center"> <span><FontAwesomeIcon className="bg-white ml-7 mr-3 px-5 py-4 text-2xl rounded-full text-sky-400" icon={faPlay} /></span> <span className="text-xl">Watch Videos</span></button>

              </div>
            </div>
          </div>
        </div>
        <div className="relative ml-auto order-1 lg:order-2">
        <div className="w-full">
        <img className=" max-h-[650px]  h-auto" src={loadingScreenImg} alt="" />
        </div>
        
          <p className="absolute top-44 right-20 bg-btnColor py-2 px-3 border-2 border-white rounded-xl text-white  text-3xl"><FontAwesomeIcon icon={faChartSimple} /></p>
          <p className="absolute inset-y-1/2  left-[-100px] btn-liner px-7 py-7 text-2xl flex items-center border-2 font-semibold text-gray-900 border-white rounded-xl">75+ Course</p>
          <div className="absolute bottom-4 right-11 px-3 py-1 btn-liner text-2xl text-gray-900 border-2 border-white rounded-xl flex"> <p className="px-3 rounded-2xl text-4xl bg-btnColor text-white flex items-center mx-3"><FontAwesomeIcon icon={faUserGraduate} /></p> <p>10,000+ <span className="block">  Students</span></p> </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default LandingSection;
