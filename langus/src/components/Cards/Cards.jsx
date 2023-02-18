
import React, { useState } from 'react';

import style from './style.module.scss';
import '../diction.json';



export default function Cards(props) {
  const { en, tr , ru} = props;
  
 
  const [isRu, setIsRu] = useState (<div className={style.item} >{ru}</div>);
  const handleClick = () => { setIsRu};
 
    
  return (
    
    
    <div className={style.card}>
    <div className={style.wordwrap}>      
      <div className={style.item} >{en}</div>
      <div className={style.item}>{tr}</div>
      
      <button className={style.button_tr} onChange={handleClick} >Перевод</button>
            </div>
    </div>
    
      
  
  )
}



/*function IsRu(props) {
  return (
    <div className={style.ru}>{props.ru}</div>
      
  );
}*/
