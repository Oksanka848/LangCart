import React from 'react';
import style from '../Cards/style.module.scss';

export default function Slides({ words }) {
  const { en, tr, ru, id } = words;
  return (
    <div className={style.card}>
      <div className={style.wordwrap}>
        <div className={style.item} >{en}</div>
        <div className={style.item} >{tr}</div>
        <div className={style.item} >{ru}</div>
        <div className={style.index}>{id}</div>
      </div>
    </div>
  )
}
