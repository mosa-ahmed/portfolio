import React from 'react'
import style from './Navbar.module.css'
import {Link} from 'react-router-dom'
import business from '../../assets/icons/business_contact.png';
import comvzhssmyverizon from '../../assets/icons/comvzhssmyverizon.png';
import graduation from '../../assets/icons/graduation_cap.png';
import chart from '../../assets/icons/pie_chart.png';
import safe from '../../assets/icons/safe.png';
import envelope from '../../assets/icons/envelope.png';

export default function Navbar() {
  return (
    <div className={`${style.sidebar} text-center d-flex`}>
      <button className={`${style.button} btn`}>
        <Link to='/' className='position-relative'>
          <img src={business} className='fa-bounce' alt="" />
          <span className=' py-1 px-3 mb-1 text-white position-absolute translate-middle rounded-2'>Home</span>
        </Link>
      </button>

      <button className={`${style.button} btn`}>
        <Link to='/about' className='position-relative'>
          <img src={comvzhssmyverizon} className='fa-bounce' alt="" />
          <span className=' py-1 px-3 mb-1 text-white position-absolute translate-middle rounded-2'>About</span>
        </Link>
      </button>

      <button className={`${style.button} btn`}>
        <Link to='/education' className='position-relative'>
          <img src={graduation} className='fa-bounce' alt="" />
          <span className=' py-1 px-3 mb-1 text-white position-absolute translate-middle rounded-2'>Education</span>
        </Link>
      </button>

      <button className={`${style.fingerprint} rounded-circle`}>
        <Link to='/list'><i  className={`text-white fa-solid fa-fingerprint ${style.icon} fa-beat-fade`}></i></Link>
      </button>

      <button className={`${style.button} btn`}>
        <Link to='/skills' className='position-relative'>
          <img src={chart} className='fa-bounce' alt="" />
          <span className=' py-1 px-3 mb-1 text-white position-absolute translate-middle rounded-2'>Skills</span>
        </Link>
      </button>

      <button className={`${style.button} btn`}>
        <Link to='/portfolio' className='position-relative'>
          <img src={safe} className='fa-bounce' alt="" />
          <span className=' py-1 px-3 mb-1 text-white position-absolute translate-middle rounded-2'>Portfolio</span>
        </Link>
      </button>

      <button className={`${style.button} btn`}>
        <Link to='/contact' className='position-relative'>
          <img src={envelope} className='fa-bounce' alt="" />
          <span className=' py-1 px-3 mb-1 text-white position-absolute translate-middle rounded-2'>Contact</span>
        </Link>
      </button>
    </div>
  )
}
