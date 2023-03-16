import React from 'react'
import {
  BrowserRouter as Router,

  Routes,
  Route,
  Link
} from "react-router-dom";
import words from '../diction.json';
import AddWordList from '../AddWord/AddWordList';
import Cards from '../Cards/Cards';
import style from './style.module.scss';
import WordList from '../WordList/WordList';
import Slider from '../Slider/Slider';

export default function Header() {
  return (
    <>
      <Router>
        <div className={style.header_container}>
          <div className={style.header_wrapp}>
            <div className={style.header_section}>
              <nav>
                <ul>
                  <li>
                    <Link to="/WordList">WordList</Link>
                  </li>
                  <li>
                    <Link to="/Cards">Cards</Link>
                  </li>
                  <li>
                    <Link to="/AddWordList">AddWord</Link>
                  </li>
                  <li>
                    <Link to="/Slider">Slider</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
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
      </Router>
    </>
  );
}
