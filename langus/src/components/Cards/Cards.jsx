import React, { useState } from 'react';
import words from '../diction.json';
import Card from './Card';
import style from './style.module.scss';
export default function Cards() {
  const [count, setCount] = useState(0);
  const countWord = () => {
    setCount(count + 1);
  };
  return (
    <>
    <div className={style.countbox}>теперь вы знаете {count} слов(а)</div>
      <div className={style.cardrow}>
        {
          words.map((word) =>
            <Card key={word.id} en={word.en} ru={word.ru} tr={word.tr}
            countWord={countWord} />
          )
        }
      </div>
    </>
  )
}
