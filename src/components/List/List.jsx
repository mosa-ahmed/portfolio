import React, { useEffect, useState } from 'react'
import style from './List.module.css'
import Loading from '../Loading/Loading'
import business from '../../assets/icons/business_contact.png'
import comvzhssmyverizon from '../../assets/icons/comvzhssmyverizon.png';
import graduation from '../../assets/icons/graduation_cap.png';
import chart from '../../assets/icons/pie_chart.png';
import safe from '../../assets/icons/safe.png';
import envelope from '../../assets/icons/envelope.png';
import Navtop from '../Navtop/Navtop'
import { Link } from 'react-router-dom';

export default function List() {
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setloading(true);
    setTimeout(()=>{
      setloading(false);
    },2000);
  }, [])

  const portfolios = [
    {title:'Home', image: business, path:'/'},
    {title:'About Me', image: comvzhssmyverizon, path:'/about'},
    {title:'Education', image: graduation, path:'/education'},
    {title:'Skills', image: chart, path:'/skills'},
    {title:'Portfolio',image: safe, path:'/portfolio'},
    {title:'Contact', image: envelope, path:'/contact'},
];
  
  return (
    <>{loading?<Loading/>:<>
      <section id="portfolio" className={`${style.bgColor} d-flex align-items-center text-center`}>
        <Navtop title='Mousa Ahmed'/>
        <div className="container px-5 pb-5">
          <div className="row gy-4 gx-5 my-5 my-md-0">
              {portfolios.map((portfolio,index)=>(
                  <div key={index} className={`col-6 col-md-6 col-lg-4 ${style.list}`}>
                      <Link to={portfolio.path}>
                        <div>
                          <img src={portfolio.image} className={`img-fluid ${style.content} rounded-3 ${style.imageport}`} alt=""/>
                        </div>
                      </Link>
                      <h4 className={`mt-1 mb-4 ${style.title}`}>{portfolio.title}</h4>
                  </div> 
                  )
              )}   
          </div>
    </div>
      </section>
    </>}</>
  )
}
