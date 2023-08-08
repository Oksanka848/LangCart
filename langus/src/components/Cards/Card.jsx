import React, { useState, useEffect , useRef  } from 'react';
import style from './style.module.scss';
export default function Card(props) {
  const { en, tr, ru } = props;
  const [click, setClick] = useState(props.click || false);
  const handleClick = () => {setClick(!click);props.countWord();};
  const ref = React.createRef();
//const ref = useRef(null);
useEffect((e) => ref.current.focus(e), []);
  return (
    <div className={style.card}>
      <div className={style.wordwrap}>
        <div className={style.item} >{en}</div>
        <div className={style.item} >{tr}</div>
        {click ? (
                    <div className={style.item} onClick={() => handleClick()} >{ru}</div>
                    ) : (
                      <button ref={ref} 
                      onMouseLeave={(e) => {if (ref.current) { ref.current.focus(e) }}}
                      className={style.button_tr} onClick={() => handleClick()} >Перевод</button>
                      )}
                    </div>
                  </div>
  )
}              
