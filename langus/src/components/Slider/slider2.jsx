import React, { useState, useEffect } from 'react';
import words from '../diction.json';
import Cards from '../Cards/Cards'

import style from './style.module.scss';


function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "{style.next}" ? "{style.btn-slide next}" : "{btn-slide prev}"}
    >
      <img alt="" src={direction === "{style.next}" ? "{style.next}" : "{style.prev}" }/>
    </button>
  );
}

const Slids =() =>{ 
  return (
  
      
        <Cards />
             )
    
   
  }
  export default function Slider() {
    
    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlide = () => {
        if(slideIndex !== Slids.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === Slids.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(Slids.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className={style.container_slider}>
            {Slids.map((index) => 

                
                    <Cards

                    key={index}
                    className={slideIndex === index + 1 ? `{slide active-anim}` : `{slide}`}
                    
                          >
              </Cards>)}
              <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            <div className={style.container_dots}>
                {Array.from({length: 5}).map((Card, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? `{dot active}` : `{dot}`}
                    ></div>
                ))}
            </div>
                    </div>
                
            )}
/*function moveDot ( count ) {
  setCount(count )
}
<div className={style.container_dots}>
            {Array.from({length: 5}).map((slide, count) => (
                    <div className={style.dot}
                    onClick={() => moveDot(count + 1)
                    }>
              </div> ))}
                </div>*/
