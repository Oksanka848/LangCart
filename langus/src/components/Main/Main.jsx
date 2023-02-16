import React from 'react';
import List from '../List/List';
import WordList from '../WordList/WordList';

import style from './style.module.scss';

export default function Main() {
  return (
    <>
    <div className={style.main}>
    
    <section ><List/></section>
    <section ><WordList/></section>
   
    </div>
          </>
  )
}
