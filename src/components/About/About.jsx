import React, { useEffect, useState } from 'react'
import style from './About.module.css'
import Loading from '../Loading/Loading'
import Navtop from '../Navtop/Navtop'

export default function About() {
const [loading, setloading] = useState(false)
useEffect(() => {
  setloading(true);
  setTimeout(()=>{
    setloading(false);
  },2000);
}, [])
  
  return (
    <>
    {loading?<Loading/>:<>
      <section className={`${style.bgAbout} d-flex align-items-center`}>
        <Navtop title='About Me'/>
        <div className="container px-4">
          <div className="d-flex justify-content-center align-items-center">
            <div className={`${style.bgContent} p-5 mb-5 rounded-4`}>
              <h4 className={`fs-5 fw-bolder mb-4`} style={{color:'#63035e'}}>BIT MORE ABOUT ME ?</h4>
              <p className={`${style.paragraph} mb-0`}>Hello! i'm Mousa Ahmed. junior Front-end developer with experience in building and maintaining responsive websites. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5 - CSS - CSS3 - SASS - Bootstrap 5 - JavaScript - jQuery - React Js - React Query - Redux - Redux Toolkit - Jest - Material UI - Ant Design and NextJs.</p>
              <br/>
              <p className={`${style.paragraph} mb-0`}>I worked with plugins like Owl Carousel.js - Slick.js - Wow.js - Aos.js and Skitter.js</p>
              <p className={`${style.paragraph}`}>I have Knowledge of APIs, and Regular Expression</p>

              <ul className="p-0 mt-4">
                <li className={`${style.list} list-unstyled mb-2`}><i className="fa-solid fa-envelope pe-3 fs-6"></i><a href="mailto:mousa.ahmed.mustafa@gmail.com" className={`${style.paragraph} text-dark text-decoration-none`}>mousa.ahmed.mustafa@gmail.com</a></li>
                <li className={`${style.list} list-unstyled mb-2`}><i className="fa-brands fa-github pe-3 fs-6"></i><a href="https://github.com/mosa-ahmed" className={`${style.paragraph} text-dark text-decoration-none`}>https://github.com/mosa-ahmed</a></li>
                <li className="list-unstyled mb-2"><i className="fa-solid fa-phone pe-3 fs-6"></i><small className={`text-dark ${style.paragraph}`}>+20 1092125077</small></li>
                <li className="list-unstyled mb-2"><i className="fa-solid fa-phone pe-3 fs-6"></i><small className={`text-dark ${style.paragraph}`}>+20 1011789002</small></li>
                <li className="list-unstyled"><i className="fa-solid fa-location-dot pe-3 fs-6"></i><small className={`text-dark ${style.paragraph}`}>Alexandria, Egypt</small></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>}
    </>
  )
}
