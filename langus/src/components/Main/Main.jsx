import React from 'react';
import Cards from '../Cards/Cards';
import WordList from '../WordList/WordList';
import AddWordList from '../AddWord/AddWordList';
import Slider from '../Slider/Slider';
import style from './style.module.scss';
import { Routes, Route, Link } from "react-router-dom";
export default function Main() {
  return (
    <>
      <div className={style.container_wrap}>
                    <Routes>
              <Route path="/Cards" element={<Cards/>} />
              <Route path="/" element={<WordList />} />
              <Route path="/AddWordList" element={<AddWordList />} />
              <Route path="/Slider" element={<Slider />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
            </div>
    </>
  )
}
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
