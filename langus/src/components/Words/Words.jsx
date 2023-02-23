import React from 'react'
import '../diction.json';
import style from './style.module.scss';

export default function Words(props) {
  const { en, ru, tr } = props;
  return (
    <>
      <div className={style.item}>{en}</div>
      <div className={style.item}>{ru}</div>
      <div className={style.item}>{tr}</div>
    </>
  )
};
