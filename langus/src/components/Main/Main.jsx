import React from 'react';
import Cards from '../Cards/Cards';
import {WordList, AddWordList, Slider} from '../index'
import style from './style.module.scss';
import { Routes, Route, Link } from "react-router-dom";
export default function Main() {
  return (
    <>
      <div className={style.container_wrap}>
                    <Routes>
                      
              <Route exact path="/Cards" element={<Cards/>} />
              
              <Route exact path="/AddWordList" element={<AddWordList />} />
              <Route exact path="/Slider" element={<Slider />} />
              
              
              <Route exact path="/" element={<WordList />} />
              <Route path="*" element={<NoMatch />} />
              <Route/>
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
