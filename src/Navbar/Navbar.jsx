import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faArrowRight, } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
   <>
    
      {/* <--Navbar--> */}
      <div className="bg-Lejhro-Header-Section w-screen md:h-[280px] h-[240px] md:pt-12 pt-16 md:pl-20 lg:pl-40 pl-10 pr-2 md:pr-0">
        <div className="flex xl:w-85p w-90p  text-white justify-between items-center">
          <img
            src="https://lejhro.com/lejhro_logo_white.png"
            alt="Logo"
            className="md:h-8 w-auto h-6"
          ></img>

          <div className=" lg:gap-6 xl:gap-12 gap-6   pl-10 lg:flex hidden lg:text-[15px] xl:text-lg ">
            <button className='hover:text-gray-200'>Innovations</button>
            <button className='hover:text-gray-200'>Business Services</button>
            <button className='hover:text-gray-200'>Financial Services</button>
            <button className='hover:text-gray-200'>Bootcamp</button>
          </div>

          <div className="rounded-full lg:w-9 lg:h-9 w-10 h-10 bg-white flex justify-center items-center">
            <button className="text-black text-lg">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>

        <h1 className="md:text-5xl text-4xl font-medium text-white pt-16 md:pt-20">
          Blogs
        </h1>
      </div>
   </>
  )
}

export default Navbar