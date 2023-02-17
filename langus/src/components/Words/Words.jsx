
import React from 'react'
import '../diction.json';
import style from './style.module.scss';

export default function words(props) {
    return (
      <>
    
        <div className={style.item}>{props.en}</div>
        <div className={style.item}>{props.ru}</div>
        <div className={style.item}>{props.tr}</div>
        
</>
)
}
