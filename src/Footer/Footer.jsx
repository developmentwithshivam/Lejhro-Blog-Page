import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faTwitter,faLinkedin,faYoutube } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
   <>
         {/* <--Footer--> */}
         <div className="bg-white w-screen h-[auto] flex  pt-8 pl-20 md:pt-24  md:pl-44 lg:pl-54 gap-10 md:gap-32 flex-wrap mb-20">

      
<div className="  w-40  pb-2">
  <h3 className="text-2xl font-bold pb-2">Company</h3>
  <p className="text-base pb-2">Innovations</p>
  <p className="text-base pb-2">Business Services</p>
  <p className="text-base pb-2">Financial services</p>
  <p className="text-base pb-2">Lejhro Recruiter</p>
  <p className="text-base pb-2">About</p>
  <p className="text-base pb-2">Blogs</p>
</div>

<div>
  <h3 className="text-2xl font-bold w-40 pb-2">Programs</h3>
  <p className="text-base pb-2">Lejhro Bootcamp</p>
</div>

<div>
  <h3 className="text-2xl font-bold w-40 pb-2">Support</h3>
  <p className="text-base pb-2">Contact</p>
  <p className="text-base pb-2">Terms of Use</p>
  <p className="text-base pb-2">Privacy Statement</p>
</div>

<div>
  <h3 className="text-2xl font-bold w-48 pb-2">Connect with us </h3>
  <div className="flex gap-3">
  <p className="text-2xl pb-2"><FontAwesomeIcon icon={faTwitter} /></p>
  <p className="text-2xl pb-2"><FontAwesomeIcon icon={faFacebook} /></p>
  <p className="text-2xl pb-2"><FontAwesomeIcon icon={faLinkedin} /></p>
  <p className="text-2xl pb-2"><FontAwesomeIcon icon={faYoutube} /></p>

  </div>
</div>


</div>

<div className="w-full h-8 flex justify-center">
© 2024 LEJHRO. All Rights Reserved.
</div>
   </>
  )
}

export default Footer