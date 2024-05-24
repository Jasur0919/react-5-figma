import React from 'react';
import Man from '../../assets/man-1.svg'
import Aos from 'aos';
import './Header.css'
import { useState, useEffect } from 'react';


const Header = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    Aos.init({duration: 1000})
  },[])
  return (
    <>
        <section  className="logo">
          <div className="container">
            <div className="logo_box">
              <div className="logo_text" data-aos="fade-up"
              data-aos-duration="3000">
                <h1>Hi, I am John, Creative Technologist</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <button>Download Resume</button>
              </div>
                <img    src={Man} alt=""  
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                 ></img>
            </div>
          </div>
        </section>
    
    </>
  );
};

export default Header;
