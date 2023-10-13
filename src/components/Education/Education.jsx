import React, { useEffect, useState } from 'react'
import style from './Education.module.css'
import Loading from '../Loading/Loading'
import Navtop from '../Navtop/Navtop'

export default function Education() {
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setloading(true);
    setTimeout(()=>{
      setloading(false);
    },2000);
  }, [])
  
  return (
    <>{loading?<Loading/>:<>
      <section id="education"className={`${style.bgEducation} d-flex align-items-center`}>
        <Navtop title='Education'/>
        <div className="container px-4">
          <div className="row gx-0 gx-lg-5">
            <div className="col-lg-6 col-sm-12 offset-lg-3 mb-5">
              <h2 className={`${style.h2Content} mt-5 mt-md-0 mb-3 ps-4 text-white animate`}>Education Qualifications</h2>
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className={`accordion-item ${style.bgItem}`}>
                  <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className={`accordion-button fw-bold fs-6 ${style.accordionButton}`} style={{color:'#63035e'}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      <i className='fa fa-graduation-cap me-2 fs-6 fa-fade'></i>2016 - 2021
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body text-white">
                      <p className='mb-0'>Bachelor's degree in Nuclear and Radiation Engineering, Alexandria University.</p>
                  </div>
                  </div>
                </div>
                <div className={`accordion-item ${style.bgItem}`}>
                  <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className={`accordion-button collapsed fw-bold fs-6 ${style.accordionButton}`} style={{color:'#63035e'}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      <i className='fa fa-code me-2 fs-6 fa-fade'></i>May 2023 - Sep 2023
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className={`accordion-body ${style.accordionBody} text-white`}>
                      <p>4-Month Diploma Front-end Developer in Route Academy Egyptian IT- Training Center.</p>
                    </div>
                  </div>
                </div>

                <div className={`accordion-item ${style.bgItem}`}>
                  <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className={`accordion-button collapsed fw-bold fs-6 ${style.accordionButton}`} style={{color:'#63035e'}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      <i className='fa fa-code me-2 fs-6 fa-fade'></i>Jul 2021 - Nov 2021
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className={`accordion-body ${style.accordionBody} text-white`}>
                      <p>4-Month Diploma Back-end ASP.NET Developer in Computek Academy Egyptian IT- Training Center.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>}</>
  )
}
