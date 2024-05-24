import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './companent/header/Header'
import Main from './companent/main/Main'
import Footer from './companent/footer/Footer'
import { IoCartOutline } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import AnimatedCursor from "react-animated-cursor"
import { GoArrowUp } from "react-icons/go";


function App() {

  const [count, setCount] = useState(0)




  return (
    <>

<div className="App">
      <AnimatedCursor />
    </div>
     <header>
        <div className="container">
          <div className="header_box">
          <div className="header_box_free">
      <h3 className="menu menu_h3">{count}</h3>
      <button onClick={() => setCount(prev => prev + 1)}>
        <IoCartOutline className="menu" />
      </button>
    </div>
            
            <div className="header_box_link saidbar">
              <a href="#works">Works</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </header>

      <Header/>
      <Main/>
      <button onClick={top} className='bactop' id='#'><GoArrowUp /></button>
      <Footer/>
        
  
      <footer id='contact'>
        <div className="container">
          <div className="footer_imgs">
            <FaFacebookSquare />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
          <div className="footer_par">
            <p>Copyright ©2020 All rights reserved </p>
          </div>
        </div>
      </footer>
      </>
  )
}

export default App




 