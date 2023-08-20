import React from 'react'
import style from './style.module.scss';

export default function Wordslist2(props) {
  const { english, russian, transcription } = props;
  return (
    <>
      <div className={style.item}>{english}</div>
      <div className={style.item}>{russian}</div>
      <div className={style.item}>{transcription}</div>
    </>
  )
};
