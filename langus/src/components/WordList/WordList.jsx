import React from 'react'
import words from '../diction.json'
import Words from '../Words/Words';
import style from './style.module.scss';
export default function WordList() {
  return (
    <><div className={style.container}>
      <div className={style.listcontainer}>
        <div type="text" className={style.item}> Слово</div>
        <div type="text" className={style.item}>Перевод</div>
        <div type="text" className={style.item}>Транскрипция</div>
        {
          words.map((word) =>
            <Words key={word.id} en={word.en} ru={word.ru} tr={word.tr}>
            </Words>
          )
        }
      </div >
    </div>
    </>
  )
}
