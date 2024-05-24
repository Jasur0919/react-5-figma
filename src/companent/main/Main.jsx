import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <>
        <section id='works' className="paragriph">
          <div className="container">
            <div className="paragriph_box">
              <div className="paragriph_star">
                <h3>Recent posts</h3>
                <h4>View all</h4>
              </div>

              <div className="paragriph_cards">
                <div className="paragriph_card">
                  <h3>Making a design system from scratch</h3>
                  <span className='paragriph_card_span'>12 Feb 2020 <p>|</p> Design, Pattern </span>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <div className="paragriph_card">
                  <h3>Creating pixel perfect icons in Figma</h3>
                  <span className='paragriph_card_span'>12 Feb 2020 <p>|</p> Design, Pattern </span>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Main