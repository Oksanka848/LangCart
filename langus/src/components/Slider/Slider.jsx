import React, { useState } from 'react';
import words from '../diction.json';
import Slides from './Slides';
import style from './style.module.scss';

export default function Slider() {
  const [count, setCount] = useState(0);
  function handlePrev() {
    setCount(count - 1);
    if (count === 0) {
      setCount(words.length - 1);
    }
  }
  function handleNext() {
    setCount(count + 1);
    if (count === words.length - 1) {
      setCount(0);
    }
  }
  const cardIndex = () => {

    if (count !== words.length) {
      setCount(count + 1);
    }
  };
  return (
    <>
      <div className={style.container_wrap}>
        <div className={style.container_slider}>
          <button onClick={() => handlePrev()}  >&#8592;</button>
          <Slides key={words[count]} words={words[count]} cardIndex={cardIndex} />
          <button onClick={() => handleNext()} >&#8594;</button>
        </div>
        <div>
          {count + 1} / {words.length}
        </div>
      </div>
    </>
  )
}
