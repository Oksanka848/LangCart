import React, { useState } from 'react'
import style from './style.module.scss';
import Words from '../../components/Words/Words';

export default function AddWord(props) {
    const { en, ru, tr } = props;
    const [words, setWords] = useState(props);
    const [isEditMode, setIsEditMode] = useState(0);
    const [value, setValue] = useState('');


    const handleEditMode = (props, e) => { //редактирование поля
        e = e || window.event;
        setIsEditMode ({...isEditMode.props, ...{[props]: e.target.value}});
    };


    const add = () => { // добавление элемента
        setWords([...words]);
     }
     const handleSave = () => { // завершение редактирования
        setIsEditMode(!isEditMode);
    };
     const changeValue = (e) => { // изменение содержания поля input
        setIsEditMode(e.target.value);
     }
    const handleCancel = () => { // завершение редактирования
        setIsEditMode(null);
    };
    //const remove = (event) => {setWords([...props(0, index), ...props(index + 1)]);}
    return (
        <div className={style.listwrap}>
            <div className={style.listcontainer}>
                {isEditMode ? (
                    <> <input className={style.input} value={isEditMode.en} onChange={(e) => handleEditMode(en, e)} />
                        <input className={style.input} value={isEditMode.ru} onChange={() => (isEditMode)} />
                        <input className={style.input} value={isEditMode.tr} onChange={() => (isEditMode)} />
                        <div className={style.buttons}>
                    <div className={style.button} onClick={handleSave}>Сохранить</div>
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
