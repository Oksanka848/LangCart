import React from 'react'

import style from './wordcard.module.scss'

function BtnTranslate(props) {
  const handleClick = () => {
      props.setPressed(!props.pressed);
      props.countWords();
  };

  return (
      <div className={style.button}>
          {props.pressed ? <span className={style.tr}>{props.tr}</span> :
              <button className={style.button} onClick={handleClick}>Показать перевод</button>}
      </div>
  )
}
export default function Cards(props) {
  // const { word, transcription, translate, pressed, setPressed, countWords } = props

  return (
    <div className={style.wordbox}>
      <h3 className={style.en}>{props.en}</h3>
      <h3 className={style.tr}>{props.tr}</h3>
      <BtnTranslate translate={props.tr} pressed={props.pressed} setPressed={props.setPressed} countWords={props.countWords} />
    </div >
  )
};
