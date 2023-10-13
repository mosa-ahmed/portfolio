import React from 'react';
import style from '../Loading/Loading.module.css';


export default function Loading() {
  
  return (
  
 <div className='loader'>
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={`fixed-top ${style.z1}`}>
  <path fill="#ffffff10" fillOpacity="1" d="M0,192L60,208C120,224,240,256,360,240C480,224,600,160,720,122.7C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={`fixed-top ${style.z2}`}>
  <path fill="#00000030" fillOpacity="1" d="M0,32L60,64C120,96,240,160,360,181.3C480,203,600,181,720,149.3C840,117,960,75,1080,96C1200,117,1320,203,1380,245.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg>
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={`fixed-bottom ${style.z1}`}>
  <path fill="#ffffff10" fillOpacity="1" d="M0,128L60,117.3C120,107,240,85,360,117.3C480,149,600,235,720,266.7C840,299,960,277,1080,224C1200,171,1320,85,1380,42.7L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={`fixed-bottom ${style.z2}`}>
  <path fill="#b1a8b320" fillOpacity="1" d="M0,64L60,96C120,128,240,192,360,202.7C480,213,600,171,720,149.3C840,128,960,128,1080,144C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"className={`fixed-bottom ${style.z3}`}>
  <path fill="#00000020" fillOpacity="1" d="M0,32L60,58.7C120,85,240,139,360,176C480,213,600,235,720,213.3C840,192,960,128,1080,90.7C1200,53,1320,43,1380,37.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg>
  <div id="cssLoader" className={`${style.mainWrap} ${style.mainWrapWhite}`}>
<div className={`${style.cssLoader}`}></div>
</div>
 </div>


  )
}