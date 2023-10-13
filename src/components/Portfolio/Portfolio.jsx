import React, { useEffect, useState } from 'react'
import style from './Portfolio.module.css'
import Loading from '../Loading/Loading'
import Navtop from '../Navtop/Navtop'
import StarBorder from '../StarBorder/StarBorder'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import meals from '../../assets/imgs/meals.png';
import Bookmarker from '../../assets/imgs/Bookmarker.png';
import crud from '../../assets/imgs/crud.png';
import fokir from '../../assets/imgs/fokir.png';
import festival from '../../assets/imgs/festival.png';
import Mealify from '../../assets/imgs/mealify.png';
import noxe from '../../assets/imgs/noxe.png';
import smartlogin from '../../assets/imgs/smart login system.png';
import wheather from '../../assets/imgs/wheather.png';
import start from '../../assets/imgs/start react theme.png';
import Projects from '../Projects/Projects';
import ecommerce from '../../assets/imgs/ecommerce.png';
import quiz from '../../assets/imgs/quiz.png'
import youtube from '../../assets/imgs/youtube.png'
import crypto from '../../assets/imgs/crypto.png'

export default function Portfolio() {
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setloading(true);
    setTimeout(()=>{
      setloading(false);
    },2000);
  }, [])
  
  const projects = [
        {title:'Cryptoverse', image: crypto,skill_1:'JAVASCRIPT',skill_2:'React JS',skill_3:'Chart.js',skill_4:'Redux Toolkit',skill_5:'Ant Design',liveDemo:'https://mosa-ahmed.github.io/cryptoverse-app/#/',Github:'https://github.com/mosa-ahmed/cryptoverse-app/',parg:'A Responsive React JS application where you get the most trending cryptocoins in a specified time period, and get news about it by Bing news search API'},
        {title:'Youtube Clone', image: youtube,skill_1:'BOOTSTRAP5',skill_2:'JAVASCRIPT',skill_3:'React JS',skill_4:'Material UI',liveDemo:'https://mosa-ahmed.github.io/youtube-clone/',Github:'https://github.com/mosa-ahmed/youtube-clone/',parg:'A Responsive React JS application consisting of stunning video sections, custom categories, channel pages, and, most importantly, you can play videos straight from your YouTube Clone App.'},
        {title:'E-Commerce', image: ecommerce,skill_1:'BOOTSTRAP5',skill_2:'JAVASCRIPT',skill_3:'React JS',skill_4:'Redux JS',liveDemo:'https://mosa-ahmed.github.io/freshcart-ecommerce-app/',Github:'https://github.com/mosa-ahmed/freshcart-ecommerce-app/',parg:'This project Based on React Js, Yup Vallidation (The most powerful schema description language and data validator for javascript), Sweet Alert. in this project we can add, remove, decrease and increase Quantity to the cart and get checkout of the products '},
        {title:'Noxe Movies', image: noxe,skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',skill_5:'React JS',liveDemo:'https://mosa-ahmed.github.io/noxe-movies-app/',Github:'https://github.com/mosa-ahmed/noxe-movies-app/',parg:'This project Based on React Js, Yup Vallidation (The most powerful schema description language and data validator for javascript), and themoviedb api.'},
        {title:'Start React', image: start,skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',skill_5:'React JS',liveDemo:'https://mosa-ahmed.github.io/start-react-app/',Github:'https://github.com/mosa-ahmed/start-react-app',parg:'This project Based on React Js.'},
        {title:'Festival Invitation', image: festival, skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',skill_5:'JQUERY',liveDemo:'https://mosa-ahmed.github.io/Festival-Invitation/',Github:'https://github.com/mosa-ahmed/Festival-Invitation',parg:'This project Based on HTML, CSS3, Bootstrap5, Regular Expression, JavaScript, jQuery, and Themealdb API, the application allows for one to reserve in upcoming festivals and events.'},
        {title:'Quiz App', image: quiz,skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',skill_5:'OPP',liveDemo:'https://mosa-ahmed.github.io/QuizApp/',Github:'https://github.com/mosa-ahmed/QuizApp',parg:'This project Based on HTML, CSS3, Bootstrap5, JavaScript, OPP, and Open trivia database API.'},
        {title:'Meals-Api Site', image: meals, skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',skill_5:'JQUERY',liveDemo:'https://mosa-ahmed.github.io/Yummy-Meals-APP/',Github:'https://github.com/mosa-ahmed/Yummy-Meals-APP',parg:'This project Based on HTML, CSS3, Bootstrap5, Regular Expression, JavaScript, jQuery, and Themealdb API, the application allows for one to view all meals, search for a meal based on categories, Area, and view all the ingredients used to prepare the meal.'},
        {title:'wheather Site', image: wheather, skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',liveDemo:'https://mosa-ahmed.github.io/WeatherApp/',Github:'https://github.com/mosa-ahmed/WeatherApp',parg:'A simple HTML, CSS3, Bootstrap5, and JavaScript application to display weather of any location, forecast data such as minimum and maximum temperature, wind speed and so on.'},
        {title:'Login Form', image: smartlogin, skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',liveDemo:'https://mosa-ahmed.github.io/Login/',Github:'https://github.com/mosa-ahmed/Login',parg:'Smart Login System created using HTML, CSS3, Bootstrap5, and JavaScript.'},
        {title:'Crud-App Site', image: crud, skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',liveDemo:'https://mosa-ahmed.github.io/CRUD/',Github:'https://github.com/mosa-ahmed/CRUD',parg:'This application is created to add, display, search, update and delete product. it was created using HTML, CSS3, Bootstrap5, JavaScript.'},
        {title:'Bookmarker Site', image: Bookmarker, skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',liveDemo:'https://mosa-ahmed.github.io/Bookmarker',Github:'https://github.com/mosa-ahmed/Bookmarker',parg:'This application is created to add, visit and delete your favorite sites. it was created using HTML, CSS3, Bootstrap5, JavaScript.'},
        {title:'Mealify Site', image: Mealify, skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',liveDemo:'https://mosa-ahmed.github.io/Mealify',Github:'https://github.com/mosa-ahmed/Mealify',parg:'This project Based on HTML, CSS3, Bootstrap5, Regular Expression, JavaScript, jQuery, and Themealdb API, the application allows for one to view all meals, search for a meal based on categories, Area, and view all the ingredients used to prepare the meal.'},
        {title:'Fokir Site', image: fokir, skill_1:'HTML5',skill_2:'CSS3',liveDemo:'https://mosa-ahmed.github.io/Fokir/',Github:'https://github.com/mosa-ahmed/Fokir',parg:'This project Based on HTML, CSS3'},
]

  return (
    <>{loading?<Loading/>:<>
        <section id='portfolio' className={`position-relative ${style.bgPortfolio}`}>
          <div className={`${style.circle1}`}></div>
          <div className={`${style.circle2}`}></div>
          <div className={`${style.circle3}`}></div>
          <div className={`${style.circle4}`}></div>
          <Navtop title='Portfolio'/>
          <div className="container py-5">
            <h2 className={`text-center mb-2 mt-5 fs-2 text-white ${style.parg}`}>My Works</h2>
            <StarBorder/>
            <div className="row mt-1 pt-1 pb-5 align-items-center g-0 g-md-4">
            {projects.map((project,idx)=> 
              <Projects key={idx} data={project} id={idx}/>  
            )}
            </div>
          </div>
          <ScrollToTop/>
        </section>
    </>}</>
  )
}
