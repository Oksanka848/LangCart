import React from 'react'
import words from '../diction.json';
import Words from '../Words/Words';

export default function WordList() {
  return (
    <>{
      words.map((word) =>
        <Words key={word.id} en={word.en} ru={word.ru} tr={word.tr}>
        </Words>
      )
    }</>
  )
}
