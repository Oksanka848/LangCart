import React from 'react';
import List from '../List/List';
import WordList from '../WordList/WordList';

import style from './style.module.scss';

export default function Main() {
  return (
    <>
    <div className={`${style.main} ${style.grid}`}>
    
    <section className={`${style.maincontainer}`}>
    <List/></section>
    <section className={`${style.maincontainer}`}>
    <WordList/></section>
   
    </div>
          </>
  )
}
