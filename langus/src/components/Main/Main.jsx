import React from 'react';
import Cards from '../Cards/Cards';
import { WordList, AddWordList, Slider, PageError } from '../index'
import style from './style.module.scss';
import { Routes, Route } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div className={style.container_wrap}>
        <Routes>
          <Route path="*" element={<PageError />} />
          <Route exact path="/" element={<WordList />} />
          <Route exact path="/Cards" element={<Cards />} />
          <Route exact path="/AddWordList" element={<AddWordList />} />
          <Route exact path="/Slider" element={<Slider />} />
        </Routes>
      </div>
    </>
  )
}
