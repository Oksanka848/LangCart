import React, { useState } from 'react'
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
        <div className={style.listwrap}>
            <div className={style.listcontainer}>
                {isEditMode ? (
                    <> <input className={style.input} value={en} onChange={() => (isEditMode)} />
                        <input className={style.input} value={ru} onChange={() => (isEditMode)} />
                        <input className={style.input} value={tr} onChange={() => (isEditMode)} />
                        <div className={style.buttons}>
                    <div className={style.button} onClick={handleEditMode}>Сохранить</div>
                    <div className={style.button} onClick={handleCancel}>Отмена</div>
                </div></>
                ) : (<>
                    <Words key={props.id} en={props.en} ru={props.ru} tr={props.tr} />
                    <div className={style.buttons}>
                    <div className={style.button} onClick={handleEditMode}>Редактировать</div>
                    <div className={style.button} onClick={handleCancel}>Удалить</div>
                </div></>
                )
                }
                            </div ></div>
    )
}
