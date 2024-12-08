import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import Footer from "./Footer/Footer";
import ScrollNavbar from "./Navbar/ScrollNavbar";
import { useEffect, useState } from "react";
function App() {
// heloo this is me
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;  
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  

//   useEffect(() => {
//  console.log(scrollPosition);
 
//   }, [scrollPosition])
  
  
  return (
    <>
      <div className="overflow-hidden">
        <div>

        </div>
       {scrollPosition>90?<ScrollNavbar />:null} 
       {/* <ScrollNavbar/> */}
        <Navbar />
        <HeroSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
