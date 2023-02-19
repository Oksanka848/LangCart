
import React, { useState } from 'react';
import style from './style.module.scss';

export default function Cards(props) {
  const { en, tr, ru } = props;
  const [click, setClick] = useState(props.click || false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className={style.card}>
      <div className={style.wordwrap}>
        <div className={style.item} >{en}</div>
        <div className={style.item} >{tr}</div>
        {click ? (
          <div className={style.item} onClick={handleClick} >{ru}</div>
        ) : (
          <button className={style.button_tr} onClick={handleClick} >Перевод</button>
        )}
      </div>
    </div>
  )
}



/*export default function Cards(props) {
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
}*/



/*function IsRu(props) {
  return (
    <div className={style.ru}>{props.ru}</div>
      
  );
}*/

