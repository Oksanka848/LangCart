import React from 'react'
import { Link } from "react-router-dom";
import style from './style.module.scss';

export default function Header() {
  return (
    <>
      <div className={style.header_container}>
        <div className={style.header_wrapp}>
          <div className={style.header_section}>
            <nav>
              <ul>
                <li>
                  <Link to="/WordList"><span className={style.logo}></span></Link>
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
    </>
  );
}
