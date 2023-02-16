import React, { useState } from 'react'
import '../diction.json';
import style from './style.module.scss';

/*import Button from '../Button/Button';*/

export default function AddWord() {
   
      const [isEditMode, setIsEditMode] = useState(false);

    const handleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    const handleCancel = () => {
        setIsEditMode(!isEditMode);
    }

    const saveCancelBtns = () => {
     
  return (
    <>
       
                         
                    <input type="text" className={style.input} ></input>
                    <input type="text" className={style.input} ></input>
                    <input type="text" className={style.input} ></input>
                                        <div className={style.buttons}>
                        <div className={style.button} >Сохранить</div>
                        <div className={style.button}  onClick={handleCancel}>Отмена</div>
                    </div>
                </>
                )
    }

    const editDeleteBtns = () => {
        return (
           
                <>
                    
                    <div className={style.item}></div>
        <div className={style.item}></div>
        <div className={style.item}></div>
        
    
                                       <div className={style.buttons}>
                        <div className={style.btn}></div>
                        <div className={style.button} onClick={handleEditMode}>Добавить</div>
                    </div>
                    
                </>
            )}
        
            return (
                <div className={style.listcontainer}>
                    {isEditMode ? saveCancelBtns() : editDeleteBtns()}
                </div >
            )
        }
