import React from 'react'
import style from './Projects.module.css'
import StarBorder from '../StarBorder/StarBorder'
import $ from 'jquery'

export default function Projects({data,id}) {

  function display(id){
    $('#title').html(data.title);
    console.log(data)
    $('#img').attr('src',data.image);
    $('#github').attr('href',data.Github);
    $('#live').attr('href',data.liveDemo);
    $('#parg').html(data.parg);
  }

  return (
    <>
      <div className="col-md-6 mt-4 col-lg-4 mb-2">
        <div className={`${style.protfolioContentImg} position-relative overflow-hidden`} onClick={()=>display(id)} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <img src={data.image} alt=""/>
          <div className={`${style.portfolioContent}`}>
            <i className={`fa-solid fa-hand-pointer fa-fade fs-2 ${style.hand}`}></i>
            <h5>{data.title}</h5>
            <div className={`${style.portfolioSkills} text-center pt-3 pb-5 mx-2`}>
              <ul className='d-flex flex-wrap justify-content-center align-items-center p-0 mx-2'>
                <li className='list-unstyled mt-2'>{data.skill_1}</li>
                <li className='list-unstyled mt-2'>{data.skill_2}</li>
                {data.skill_3?<li className='list-unstyled mt-2'>{data.skill_3}</li>:null}
                {data.skill_4?<li className='list-unstyled mt-2'>{data.skill_4}</li>:null}
                {data.skill_5?<li className='list-unstyled mt-2'>{data.skill_5}</li>:null}
              </ul>
            </div>
            <div className={`${style.portfolioCode}`}>
              <a href={data.liveDemo} rel="noreferrer"className="text-white" target="_blank"><i className="fa-solid fa-eye rounded-2 me-2"></i></a>
              <a href={data.Github} rel="noreferrer" className="text-white" target="_blank"><i className="fa-solid fa-link rounded-2"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby='staticBackdropLabel' aria-hidden="true">
       <div className="modal-dialog modal-lg" role="document">
        <div className={`modal-content position-relative ${style.bgProject} mb-5 pb-1`}>
          <button type="button" data-bs-dismiss="modal" aria-label='Close' className={`border-0 bg-transparent ${style.buttonClose}`}>
            <i className='fas fa-times text-dark fs-4 text-white'></i>
          </button>
        <div className="text-center">
          <div className="container p-5">
            <div className="row justify-content-center">
              <div className="col-md-10">
              <h2 className='mt-2 text-white title' id='title'> </h2>
              <StarBorder/>
              <img id='img' className='img-fluid rounded-3 mb-3 mt-2' alt="" />
              <p  className={`mt-0 fs-6 fw-semibold ${style.parg}`} id='parg'></p>
              <a href=' ' rel="noreferrer"className="text-white d-inline me-2" id='github'target="_blank"><button className='btn btn-dark'>GitHub</button></a>
              <a href={data.liveDemo} rel="noreferrer"className="text-white d-inline" id='live'target="_blank"><button className='btn btn-dark'>Live Demo</button></a>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
    </>
  )
}
