import React, { useState } from 'react'
import '../diction.json';
import style from './style.module.scss';
import words from '../diction.json';
import Words from '../Words/Words';
/*import Button from '../Button/Button';*/
/*<div class="button">
 <p>Write to Us &#x270E; </p>
    	</div>*/export default function AddWord({item}) {
            const { en, ru, tr } = item;
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
       
                         
                    <input type="text" className={style.input} >{ru}</input>
                    <input type="text" className={style.input} >{en}</input>
                    <input type="text" className={style.input} >{tr}</input>

                                        <div className={style.buttons}>
                        <div className={style.button} >Сохранить</div>
                        <div className={style.button}  onClick={handleEditMode}>Отмена</div>
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
                    {isEditMode ? handleEditMode() : handleEditMode()}
                </div >
            )
        }
