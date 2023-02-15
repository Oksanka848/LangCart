import React from 'react'
import words from '../diction.json';
import Words from '../Words/Words';
import style from '../Words/word.module.scss';
export default function WordList() {
  return (
    <><div className={style.container}>
    <ul className={style.listcontainer}>
        <li className={style.item}> Слово</li>
        <li className={style.item}>Перевод</li>
        <li className={style.item}>Транскрипция</li>
                <li className={style.item}></li>
    </ul >
    
</div>{
      words.map((word) =>
        <Words key={word.id} en={word.en} ru={word.ru} tr={word.tr}>
        </Words>
      )
    }</>
  )
}
