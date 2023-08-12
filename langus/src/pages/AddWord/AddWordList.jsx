import React from 'react';
import words from '../../components/diction.json';
import AddWord from './AddWord';

export default function AddWordList() {
  return (
    <>
      <AddWord rows={words} actions />
    </>
  )
}
