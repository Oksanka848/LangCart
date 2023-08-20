import React from 'react'
import { CustomLink } from './CustomLink';
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
                  <CustomLink to="/" end><img src={require('./mylogo.svg').default} alt="Home" className={style.logo}/>Home</CustomLink>
                </li>
                <li>
                  <CustomLink to="/Words2" end>Words</CustomLink>
                </li>
                <li>
                  <CustomLink to="/Cards" end>Cards</CustomLink>
                </li>
                <li>
                  <CustomLink to="/AddWordList" end>AddWord</CustomLink>
                </li>
                <li>
                  <CustomLink to="/Slider" end>Slider</CustomLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
