import Home from "../page";
import React from "react";
const Navbar = () => {
    return(
        
        <div className="bg-transparent w-full h-100px  z-[40] fixed top-0 justify-between ite
        ms-center px-5"> 
        <div className="flex flex-row gap-3 items-center">
       <a href="/">  <h1 className=" relative top-5 text-[13px]  lg:text-[22px] lg:px-8  font-mono text-blue-500  hover:text-blue-400
        hover:text-1x1  font-bold hover:font-light"> Saim Chain <span className="
        text-red-500 ">Dev</span></h1></a>
        </div >
      <div className="flex text-gray-200   text-[10px]  lg:left-96 lg:px-96 lg:text-[15px] lg:gap-14 sl flex-row gap-3 relative left-[185px]  sm:left[140px] -top- font-mono items-center ">
      <a href="/" className="">Home</a>
      <a href="/skills">Skills</a>
      <a href="/contact">Contact ME</a>
      <a href="/about">About US</a>
      </div>
        </div>  
    )
}
export default Navbar