import React, { useState,
  useEffect,
  useRef,
  forwardRef, } from 'react';
import words from '../diction.json';
import Card from './Card';
//import CardsCount from './CardsCount';
import style from './style.module.scss';
export default function Cards() {
  const [count, setCount] = useState(0);
  function countWord () {
    setCount(count + 1);
  }

  const ref = useRef();

  return (
    <>
    <span >вы выучили {countWord} слов</span>
      <div className={style.cardrow}>
        {
          words.map((word) =>
            <Card key={word.id} en={word.en} ru={word.ru} tr={word.tr}
            countWord={countWord} ref={ref}/>

          )
        }
      </div>
    </>
  )
}

