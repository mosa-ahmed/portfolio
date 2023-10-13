import React, { useEffect, useRef, useState } from 'react'
import style from './Home.module.css'
import Loading from '../Loading/Loading';
import Typed from 'typed.js'

export default function Home() {
  const [loading, setloading] = useState(false)
  const el = useRef(null);

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 2000);
  }, [])
  
  useEffect(()=>{
    setTimeout(()=>{
      const typed = new Typed(el.current,{
        strings:['Front-end Developer React JS'],
        startDelay:200,
        typeSpeed:70,
        backSpeed:50,
      });
      return()=>{
        typed.destroy();
      };
    },2600)
  
  },[]);

  return (
  <>
    {loading?<Loading/>:<>
      <header className={`${style.home} position-relative`}>
        <div className={`${style.overlay} position-absolute top-0 end-0 start-0 bottom-0 d-flex flex-column justify-content-center align-items-center`}>
          <div className={`${style.homeContent} text-white text-center`}>
            <h1>Mousa Ahmed</h1>
            <p ref={el}></p>
            <div className="social-icons d-flex justify-content-center">
              <div className={`${style.portfolioIcons} d-flex justify-content-center align-items-center`}>
                <button className='btn'>
                  <a href="mailto:mousa.ahmed.mustafa@gmail.com" className='text-white'>
                    <i className='fa fa-envelope fs-6'></i>
                  </a>
                </button>
              </div>

              <div className={`${style.portfolioIcons} d-flex justify-content-center align-items-center`}>
                <button className='btn'>
                  <a href="https://github.com/mosa-ahmed" className='text-white' target={'_blank'} rel="noreferrer">
                    <i className='fab fa-github fs-6'></i>
                  </a>
                </button>
              </div>

              <div className={`${style.portfolioIcons} d-flex justify-content-center align-items-center`}>
                <button className='btn'>
                  <a href="https://www.linkedin.com/in/mousa-ahmed-5a8523140" className='text-white' target={'_blank'} rel="noreferrer">
                    <i className='fab fa-linkedin fs-6'></i>
                  </a>
                </button>
              </div>

              <div className={`${style.portfolioIcons} d-flex justify-content-center align-items-center`}>
                <button className='btn'>
                  <a href="https://www.facebook.com/dfsdfsgfsvsvv" className='text-white' target={'_blank'} rel="noreferrer">
                    <i className='fab fa-facebook fs-6'></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>}  
  </>
  )
}
