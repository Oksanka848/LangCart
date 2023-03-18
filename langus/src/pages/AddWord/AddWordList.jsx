import React from 'react';
import words from '../../components/diction.json';
import AddWord from './AddWord';

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
