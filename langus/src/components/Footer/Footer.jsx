import React from 'react';
import Contacts from '../Contacts/Contacts';
import style from './style.module.scss';

export default function Footer() {
  return (
    <>
    <div className={style.footer}>
    <Contacts/>
    </div>
    </>
  )
}
