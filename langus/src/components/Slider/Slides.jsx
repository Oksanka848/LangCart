import React from 'react';

import style from '../Cards/style.module.scss';

export default function Slides ({words}) {
 
  const { en, tr, ru, id } = words;
  
  return (
    <div className={style.card}>
      <div className={style.wordwrap}>
        <div className={style.item} >{en}</div>
        <div className={style.item} >{tr}</div>
        <div className={style.item} >{ru}</div>
        <div className={style.item} >{id}</div>
      </div>
    </div>
  )
}
/*{click ? (
          <div className={style.item} onClick={handleClick} >{ru}</div>
        ) : (
          <button className={style.button_tr} onClick={handleClick} >Перевод</button>
        )}*/
