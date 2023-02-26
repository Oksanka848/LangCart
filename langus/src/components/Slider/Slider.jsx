import React, { useState, useEffect } from 'react';
import words from '../diction.json';
import Slides from './Slides';
import style from './style.module.scss';

export default function Slider() {
  const [count, setCount] = useState(0);
  function handlePrev() {
    if (count !== setCount) {
      setCount(count - 1)
    }
    else if (count === Slides.length) {
      setCount(count + 1)
    }
  }
  function handleNext() {
    if (count !== setCount) {
      setCount(count + 1)
    }
    else if (count === Slides.length) {
      setCount(Slides.length)
    }
  }
  return (
    <>
      <div className={style.container_slider}>
        <button onClick={() => handlePrev()}  >&#8592;</button>
        <Slides key={words[count]} words={words[count] || { en: '', tr: '', ru: '', id: '' }}/>
        <button onClick={() => handleNext()} >&#8594;</button>
      </div>
    </>
  )
}

/*useEffect(() => {
     setInterval(() => {
          setCount((current) => {
                   const res = current === Slides.length - 1 ? 0 : current + 1
                  return res
      })
  }, 3000)
  return () => Slides.length + 1
}, [])
*/
/*const prevImgIndex = count ? count - 1 : Slides.length - 1
const nextImgIndex  = count === Slides.length - 1 ? 0 : count + 1*/
/*function handlePrev(){
  setCount(count - 1);

    
};
function handleNext(){
  setCount(count + 1)
};
useEffect(() => console.log(count), [
  count,
]);*/
