import React from 'react'
import style from './Navtop.module.css'
import {Link} from 'react-router-dom'

export default function Navtop({title}) {
  return (
    <div className={`fixed-top ${style.bgNav} text-white text-center`}>
      <div className={`position-fixed ${style.xIcon}`}>
        <Link to='/'>
          <i className='fa fa-circle-xmark text-white'></i>
        </Link>
      </div>
      <h4 className={`${style.navTitle} mb-0`}><i className={`${style.iconNav} fa fa-circle me-2`}></i>{title}</h4>
    </div>
  )
}
