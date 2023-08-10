import React, { useState } from 'react'
import style from './style.module.scss';
import Words from '../../components/Words/Words';

export default function AddWord(props) {
    const { en, ru, tr } = props;
    //const [words, setWords] = useState(props);
    const [isEditMode, setIsEditMode] = useState(props);
    //const [value, setValue] = useState('');

    const handleEditMode = (props, e) => { //редактирование поля
        e = e || window.event;
        setIsEditMode ({...isEditMode.props, ...{[props]: e.target.value}});
    };

    /*const add = () => { // добавление элемента
        setWords([...words]);
     }*/
     /*const handleSave = () => { // завершение редактирования
        setIsEditMode(isEditMode);
    };*/
    /* const changeValue = (e) => { // изменение содержания поля input
        setIsEditMode(e.target.value);
     }*/
    const handleCancel = () => { // отмена редактирования
        setIsEditMode(!isEditMode);
    };
    const handleSave = (e) => {setIsEditMode([...props, ...{[props]: e.target.value}]);}
    return (
        <div className={style.listwrap}>
            <div className={style.listcontainer}>
                {isEditMode ? (
                    <> <input className={style.input} value={isEditMode.en} defaultValue={en} onChange={(e) => handleEditMode(e.target.value)} />
                        <input className={style.input} value={isEditMode.ru} defaultValue={ru} onChange={(e) => handleEditMode(e.target.value)} />
                        <input className={style.input} value={isEditMode.tr} defaultValue={tr} onChange={(e) => handleEditMode(e.target.value)} />
                        <div className={style.buttons}>
                        <div className={style.button} onClick={handleSave}>Сохранить</div>
                    <div className={style.button} onClick={handleCancel}>Отмена</div>
                </div></>
                ) : (<> 
                    <Words key={props.id} en={props.en} ru={props.ru} tr={props.tr} />
                    <div className={style.buttons}>
                    <div className={style.button} onClick={handleEditMode}>Редактировать</div>
                    
                    <div className={style.button} onClick={handleCancel}>Отмена</div>
                </div></>
                )
                }
                            </div ></div>
    )
}
/*{isEditMode ? (
                    <> <input className={style.input} value={isEditMode.en} defaultValue={en} onChange={(e) => handleEditMode(e.target.value)} />
                        <input className={style.input} value={isEditMode.ru} defaultValue={ru} onChange={(e) => handleEditMode(e.target.value)} />
                        <input className={style.input} value={isEditMode.tr} defaultValue={tr} onChange={(e) => handleEditMode(e.target.value)} />
                        <div className={style.buttons}>
                        <div className={style.button} onClick={handleCancel}>Сохранить</div>
                    <div className={style.button} onClick={handleCancel}>Отмена</div>
                </div></>
                ) : (<>
                    <Words key={props.id} en={props.en} ru={props.ru} tr={props.tr} />
                    <div className={style.buttons}>
                    <div className={style.button} onClick={handleEditMode}>Редактировать</div>
                    
                    <div className={style.button} onClick={handleCancel}>Удалить</div>
                </div></>
                )
                }*/
