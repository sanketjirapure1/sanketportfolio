//import React from 'react'
import "./Intro.scss"


export default function Intro() {

  

  return (
    <div className='intro'  id="intro">
      <div className="left">
        <div className="imgContiner">
          <img src="assets/sanket-removebg-preview.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I`m</h2>
          <h1>Sanket Jirapure</h1>
          <h3> Frontend<span> Developer</span></h3>
        </div>

        <a href="#portofolio">
          <img src="assets/downarrow-removebg-preview.png" alt="" />
        </a>
      </div>
    </div>
  )
}

