import React, { useState } from 'react'
import style from './style.module.scss';

export default function AddWord({ rows, actions }) {
            const [isEditMode, setIsEditMode] = useState(false);
        const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
        const [rowsState, setRowsState] = useState(rows);
        const [editedRow, setEditedRow] = useState();
              const handleEdit = (rowID) => {
          setIsEditMode(true);
          setEditedRow(undefined);
          setRowIDToEdit(rowID);
        }
              const handleRemoveRow = (rowID) => {
          const newData = rowsState.filter(row => {
            return row.id !== rowID ? row : null
          });
                setRowsState(newData);
        }
              const handleOnChangeField = (e, rowID) => {
          const { name: fieldName, value } = e.target;
                setEditedRow({
            id: rowID,
            [fieldName]: value
          })
        }
              const handleCancelEditing = () => {
          setIsEditMode(false);
          setEditedRow(undefined);
        }
              const handleSaveRowChanges = () => {
          setTimeout(() => {
            setIsEditMode(false);
                  const newData = rowsState.map(row => {
              if (row.id === editedRow.id) {
                if (editedRow.en) row.en = editedRow.en;
                if (editedRow.ru) row.ru = editedRow.ru;
                if (editedRow.tr) row.tr = editedRow.tr;
              }
                    return row;
            })
                  setRowsState(newData);
            setEditedRow(undefined)
          })
        }
      
        return (
          <table className={style.listwrap}>
                      <tbody>
                        {rowsState.map((row) => {
              return <tr className={style.listcontainer} key={row.id}>
                <td>
                  {row.id}
                </td>
                <td>
                  { isEditMode && rowIDToEdit === row.id
                    ? <input
                    className={style.input}
                      type='text'
                      defaultValue={editedRow ? editedRow.en : row.en}
                      id={row.id}
                      name='en'
                      onChange={ (e) => handleOnChangeField(e, row.id) }
                    />
                    : row.en
                  }
                </td>
                <td>
                  { isEditMode && rowIDToEdit === row.id
                    ? <input
                    className={style.input}
                      type='text'
                      defaultValue={editedRow ? editedRow.ru : row.ru}
                      id={row.id}
                      name='ru'
                      onChange={ (e) => handleOnChangeField(e, row.id) }
                    />
                    : row.ru
                  }
                </td>
                <td>
                  { isEditMode && rowIDToEdit === row.id
                    ? <input 
                    className={style.input}
                    defaultValue={editedRow ? editedRow.tr : row.tr}
                    id={row.id}
                    name="tr"
                    onChange={e => handleOnChangeField(e, row.id)}  
                    />
                    : row.tr
                  }
                </td>
                {actions &&
                <td className={style.listcontainer}>
                  { isEditMode && rowIDToEdit === row.id
                    ? <div onClick={ () => handleSaveRowChanges() } className={style.button} disabled={!editedRow}>
                      Сохранить
                    </div>
                    : <div  onClick={ () => handleEdit(row.id) } className={style.button}>
                      Редактировать
                    </div>
                  }
      
                  { isEditMode && rowIDToEdit === row.id
                    ? <div onClick={() => handleCancelEditing()} className={style.button}>
                      Отменить
                    </div>
                    : <div onClick={() => handleRemoveRow(row.id)} className={style.button}>
                      Удалить
                    </div>
                  }
                </td>
                }
              </tr>
            })}
            </tbody>
          </table>
        );
      }
