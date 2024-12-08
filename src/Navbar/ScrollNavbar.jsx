import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faArrowRight, } from "@fortawesome/free-solid-svg-icons";
function ScrollNavbar() {
  return (
    <>
    {/* helo */}
    <div className="w-full h-16 fixed bg-white md:pl-20 lg:pl-40 pl-10 pr-16 lg:pr-24 xl:pr-48 flex justify-between items-center">
      <img
            src="https://www.bootcamp.lejhro.com/images/common/c-h/c-h-logo-red.webp"
            alt="Logo"
            className="md:h-8 w-auto h-6"
          ></img>
          <div className="flex justify-center items-center">
          <div className="pr-9 text-red-500 font-bold text-xl hidden md:block">Let's Talk <FontAwesomeIcon icon={faArrowRight} /></div>
          <div className="rounded-full lg:w-9 lg:h-9 w-10 h-10 bg-red-500 flex justify-center items-center">
            <button className="text-white text-lg">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          </div>
         
      </div>
    </>
  )
}

export default ScrollNavbar