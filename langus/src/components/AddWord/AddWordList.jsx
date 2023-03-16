import React from 'react';
import words from '../diction.json';
import AddWord from '../AddWord/AddWord';

export default function AddWordList() {
  return (
    <>
      {
        words.map((word) =>
          <AddWord key={word.id} en={word.en} ru={word.ru} tr={word.tr} />)
      }
    </>
  )
}
