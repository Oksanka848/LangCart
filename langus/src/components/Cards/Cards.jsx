import React from 'react';
import words from '../diction.json';
import Card from './Card';
import style from './style.module.scss';
export default function Cards() {
  return (
    <>
      <div className={style.cardrow}>
        {
          words.map((word) =>
            <Card key={word.id} en={word.en} ru={word.ru} tr={word.tr}>
            </Card>
          )
        }
      </div>
    </>
  )
}
