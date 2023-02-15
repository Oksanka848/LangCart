import React from 'react';
import Contacts from '../Contacts/Contacts';



export default function Header() {
  return (
    <>
    <div className='header'>
    <nav>
      <a href='/#'>Main</a>
      <a href='/#'>Words</a>
      <a href='/#'>Train</a>
      </nav>
      <Contacts />
      </div>
    </>
  )
}
