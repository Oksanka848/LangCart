import React, { useState } from 'react'

import style from './list.module.scss';
import Button from '../Button/Button';

export default function WordList() {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditMode = () => {
      setIsEditMode(!isEditMode);
  };

  const handleCancel = () => {
      setIsEditMode(!isEditMode);
  }
  return (
    
    <div className={style.listcontainer}>
            {isEditMode ? (
                <>
                    <input type="text" className={style.input}></input>
                    <input type="text" className={style.input}></input>
                    <input type="text" className={style.input}></input>
                    <input type="text" className={style.input}></input>
                    <div className={style.buttons}>
                        <Button  >Сохранить</Button>
                        <Button  onClick={handleCancel}>Отмена</Button>
                    </div>
                </>
            ) : (
                <>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className={style.buttons}>
                        <div className={style.btn}></div>
                        <Button  onClick={handleEditMode}>Добавить</Button>
                    </div>
                </>
            )}
        </div>
    )
}
