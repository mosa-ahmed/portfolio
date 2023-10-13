import React, { useEffect, useState } from 'react'
import style from './ScrollToTop.module.css'
import { HiChevronUp } from "react-icons/hi";

export default function ScrollToTop() {
  
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 150) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);
  const goToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
  };
  return (
    <>
      <div className={`${style.topToBtm}`}>
          <div className={`${style.iconPosition}`}>
            {" "}{showTopBtn && ( <HiChevronUp className= {`${style.iconStyle}`} onClick={goToTop} /> )}{" "}
          </div>
      </div>
    </>
  )
}
