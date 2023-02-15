
import React from 'react'

import style from './word.module.scss';

export default function WordList(props) {
    return (
      <>
    <div className={`${style.container}`}>
    <ul className={`${style.listcontainer}`}>
        <li className={`${style.item}`}>{props.en}</li>
        <li className={`${style.item}`}>{props.ru}</li>
        <li className={`${style.item}`}>{props.tr}</li>
        
    </ul >

</div>
</>
)
}
