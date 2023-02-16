import React from 'react';
import AddWord from '../AddWord/AddWord';
import WordList from '../WordList/WordList';

import style from './style.module.scss';

export default function Main() {
  return (
    <>
    <div className={style.main}>
    
    <section ><AddWord/></section>
    <section ><WordList/></section>
   
    </div>
          </>
  )
}
