import React from 'react'
import './Footer.css'
import Wor1 from '../../assets/work-1.svg'
import Wor2 from '../../assets/work-2.svg'
import Wor3 from '../../assets/work-3.svg'

const Footer = () => {
  return (
    <>
         <section id='blog'  className="work">
          <div className="container">
            <h3 className='work_h3'>Featured works</h3>
            <div className="work_box">
              <div className="work_par">
                <img src={Wor1} alt="" />
                <div className="work_text">
                  <h2>Designing Dashboards</h2>
                  <span className='work_text_span'><h4>2020</h4> <h3>Dashboard</h3></span>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
              </div>

              <div className="row_first"></div>
              <div className="work_par">
                <img src={Wor2} alt="" />
                <div className="work_text">
                  <h2>Vibrant Portraits of 2020</h2>
                  <span className='work_text_span'><h4>2018</h4> <h3>Illustration</h3></span>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
              </div>
              <div className="row_first"></div>
              <div className="work_par">
                <img src={Wor3} alt="" />
                <div className="work_text">
                  <h2>36 Days of Malayalam type</h2>
                  <span className='work_text_span'><h4>2018</h4> <h3>Typography</h3></span>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
              </div>
              <div className="row_first"></div>

            </div>
          </div>
        </section>
    </>
  )
}

export default Footer