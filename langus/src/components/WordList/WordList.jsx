import React from 'react'
import words from '../diction.json';
import Words from '../Words/Words';
import style from './style.module.scss';
export default function WordList() {
  return (
    <><div className={style.container}>
    <div className={style.listcontainer}>
        <div className={style.item}> Слово</div>
        <div className={style.item}>Перевод</div>
        <div className={style.item}>Транскрипция</div>
                
    </div >
    
</div>{
      words.map((word) =>
        <Words key={word.id} en={word.en} ru={word.ru} tr={word.tr}>
        </Words>
      )
    }</>
  )
}
