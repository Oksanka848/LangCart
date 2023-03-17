import React from 'react';
import words from '../diction.json';
import Cards from '../Cards/Cards';
import WordList from '../WordList/WordList';
import AddWordList from '../AddWord/AddWordList';
import Slider from '../Slider/Slider';
import style from './style.module.scss';
import { Routes, Route } from "react-router-dom";
export default function Main() {
  return (
    <>
      <div className={style.container_wrap}>
                    <Routes>
              <Route path="/Cards" element={
                <div className={style.cardrow}>
                  {
                    words.map((word) =>
                      <Cards key={word.id} en={word.en} ru={word.ru} tr={word.tr}>
                      </Cards>
                    )
                  }
                </div>
              } />
              <Route path="/WordList" element={<WordList />} />
              <Route path="/AddWordList" element={<AddWordList />} />
              <Route path="/Slider" element={<Slider />} />
            </Routes>
            </div>
    </>
  )
}
