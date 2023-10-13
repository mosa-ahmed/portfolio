import React, { useEffect, useState } from 'react'
import style from './Contact.module.css'
import Loading from '../Loading/Loading'
import Navtop from '../Navtop/Navtop'

export default function Contact() {
  const [loading, setloading] = useState(false)
  useEffect(()=>{
    setloading(true);
    setTimeout(()=>{
      setloading(false);
    },2000);
  },[]);
  return (
    <>{loading?<Loading/>:<>
      <section className={`${style.contact} d-flex align-items-center`}>
        <Navtop title='Contact'/>
        <div className="container pt-lg-0 pt-5">
          <div className="row align-items-center pt-lg-0 pt-5 gy-5">
            <div className={`col-lg-4 ${style.bgContact}`}>
              <h3 className={`text-white fs-3 ${style.animated}`}>GET IN TOUCH</h3>
              <h3 className={`text-white mb-5 fs-3 ${style.animate}`}>GET REAL</h3>
              <div className={`social-icons d-flex ${style.animation}`}>
              <div className={`${style.portfolioicons} d-flex align-items-center justify-content-center`}>
                <button className='btn'>
                  <a href="https://github.com/mosa-ahmed" className='text-white'target={'_blank'} rel="noreferrer"><i className='fab fa-github fs-6 fa-fade'></i></a>
                </button>
                </div>
                <div className={`${style.portfolioicons} d-flex align-items-center justify-content-center`}>
                  <button className='btn'>
                    <a href="https://www.linkedin.com/in/mousa-ahmed-5a8523140" className='text-white'target={'_blank'} rel="noreferrer"><i className='fab fa-linkedin fs-6 fa-fade'></i></a>
                  </button>
                </div>
                <div className={`${style.portfolioicons} d-flex align-items-center justify-content-center`}>
                  <button className='btn'>
                    <a href="https://www.facebook.com/dfsdfsgfsvsvv"className='text-white' target={'_blank'} rel="noreferrer"><i className='fab fa-facebook fs-6 fa-fade'></i></a>
                </button>
                </div>
              </div>
              <div className="contact-icons">
                <ul className="p-0 mt-4">
                  <li className={`list-unstyled mb-2 ${style.animation}`}><i className="fa-solid fa-envelope pe-3 fs-6 text-white"></i><a href="mailto:mousa.ahmed.mustafa@gmail.com" className="fs-6 text-white text-decoration-none">mousa.ahmed.mustafa@gmail.com</a></li>
                  <li className={`list-unstyled mb-2 ${style.animation}`}><i className="fa-solid fa-phone pe-3 fs-6 text-white"></i><small className='text-white fs-6'>+20 1092125077</small></li>
                  <li className={`list-unstyled mb-2 ${style.animation}`}><i className="fa-solid fa-phone pe-3 fs-6 text-white"></i><small className='text-white fs-6'>+20 1011789002</small></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-7 offset-lg-1">
              <form className={`${style.bgform} p-4 rounded-3 mb-lg-0 mb-5`}>
                <div className="form-group mb-3">
                  <div className="col-sm-12">
                    <input type="text" name="name" required className=' rounded-1 bg-dark py-1 px-2 border-dark form-control' placeholder='Your Name'/>
                  </div>
                </div>
                <div className="form-group mb-3">
              <div className="col-sm-12">
                <input type="text" name="subject" required className=' rounded-1 py-1 px-2  bg-dark form-control border-dark' placeholder='Subject'/>
              </div>
            </div>
            <div className="form-group mb-3">
              <div className="col-sm-12">
                <input type="email" name="email" required className=' rounded-1 py-1 px-2  bg-dark form-control border-dark' placeholder='Your Email'/>
              </div>
            </div>
            <div className="form-group mb-3">
              <div className="col-sm-12">
               <textarea name="message"  rows="5" className='rounded-1 bg-dark py-1 px-2  form-control border-dark' required placeholder='Your Message'></textarea>
              </div>
            </div>
            <div className="form-group mb-3">
              <div className="col-sm-12">
                <button type='submit' name='submit' value='submit' className='btn btn-dark px-3 py-2 fs-6'>Send</button>
              </div>
            </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>}</>
  )
}
