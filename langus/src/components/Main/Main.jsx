import React from 'react';
import words from '../diction.json';
import Cards from '../Cards/Cards';
import WordList from '../WordList/WordList';
import AddWord from '../AddWord/AddWord';
import Slider from '../Slider/Slider';
import style from './style.module.scss';

export default function Main() {
  return (
    <>
      <div className={style.main}>
        <section >
          <div className={style.cardrow}>
            {
              words.map((word) =>
                <Cards key={word.id} en={word.en} ru={word.ru} tr={word.tr}>
                </Cards>
              )
            }
          </div>
        </section>
        <section ><WordList /></section>
        <section >
          {
            words.map((word) =>
              <AddWord key={word.id} en={word.en} ru={word.ru} tr={word.tr}/>)
          }</section>
        <section>
          <Slider /></section>
      </div>
    </>
  )
}
