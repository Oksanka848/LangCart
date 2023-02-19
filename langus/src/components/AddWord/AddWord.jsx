import React, { useState } from 'react'
import words from '../diction.json';
import style from './style.module.scss';
import Words from '../Words/Words';

export default function AddWord(props) {
    const { en, ru, tr } = props;
    const [isEditMode, setIsEditMode] = useState(false);
    const [isCancel, setIsCancel] = useState(false);
    const handleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    const handleCancel = () => {
        setIsCancel(!isCancel);
    };

    return (

        <div className={style.container}>
            <div className={style.listcontainer}>
                {isEditMode ? handleEditMode(
                    <> <input className={style.input} >{en}</input>
                        <input className={style.input} >{ru}</input>
                        <input className={style.input} >{tr}</input></>
                ) : handleCancel(
                    <> <div className={style.item}>{en}</div>
                        <div className={style.item}>{ru}</div>
                        <div className={style.item}>{tr}</div></>

                )}
                <div className={style.buttons}>
                    <div className={style.button} onClick={handleEditMode}>Редактировать</div>
                    <div className={style.button} onClick={handleCancel}>Отмена</div>
                </div>

                {
                    words.map((word) =>
                        <Words key={word.id} en={word.en} ru={word.ru} tr={word.tr}>
                        </Words>
                    )
                }
            </div ></div>

    )
}



/*
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
                    {isEditMode ? handleEditMode() : handleCancel()}
                </div >
            )

            <div type="text" className={style.item}>{en}</div>
    <div type="text" className={style.item}>{ru}</div>
    <div type="text" className={style.item}>{tr}</div>
    <div className={style.buttons}>
                        <div className={style.button} onClick={handleEditMode}>Редактировать</div>
                        <div className={style.button}  onClick={handleCancel}>Отмена</div>
                    </div> 

*/
