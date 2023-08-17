import React, { useState } from "react";
import style from "./style.module.scss";

export default function AddWord({ rows, actions }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
  const [rowsState, setRowsState] = useState(rows);
  const [editedRow, setEditedRow] = useState();
  const [isValid, setisValid] = useState(false);

  const handleEdit = (rowID) => {
    setIsEditMode(true);
    setEditedRow(undefined);
    setRowIDToEdit(rowID);
    setisValid(true);
  };
  
  const handleRemoveRow = (rowID) => {
    const newData = rowsState.filter((row) => {
      return row.id !== rowID ? row : null;
    });
    setRowsState(newData);
  };
  const handleOnChangeField = (e, rowID) => {
    const { name: fieldName, value } = e.target;
   // if (e.target.value === 0) {setisValid(false);}

    setEditedRow({
      id: rowID,
      [fieldName]: value,
      
    });
    const isVoid = value.trim().length === 0;
    setisValid(!isVoid);
    
  };
  const handleCancelEditing = () => {
    setIsEditMode(false);
    setEditedRow(undefined);
  };
  const handleSaveRowChanges = () => {
    setTimeout(() => {
      setIsEditMode(false);
      const newData = rowsState.map((row) => {
        if (row.id === editedRow.id) {
          if (editedRow.en) row.en = editedRow.en;
          if (editedRow.ru) row.ru = editedRow.ru;
          if (editedRow.tr) row.tr = editedRow.tr;
         
          
        }
        return row;
      });
     
      setRowsState(newData);
      setEditedRow(undefined);
      
    });
   
  };

  return (
    <div className={style.listwrap}>
      <div>
        {rowsState.map((row) => {
          return (
            <div className={style.rowcontainer} key={row.id}>
              <div>{row.id}</div>
              <div>
                {isEditMode && rowIDToEdit === row.id ? (
                  <input
                    className={style.input}
                    type="text"
                    defaultValue={editedRow ? editedRow.en : row.en}
                    id={row.id}
                    name="en"
                    onChange={(e) => handleOnChangeField(e, row.id)}
                  />
                ) : (
                  row.en
                )}
              </div>
              <div>
                {isEditMode && rowIDToEdit === row.id ? (
                  <input
                    className={style.input}
                    style={{borderColor: !isValid ? "red" : "rgb(111, 0, 255)"}}
                    type="text"
                    defaultValue={editedRow ? editedRow.ru : row.ru}
                    id={row.id}
                    name="ru"
                    onChange={(e) => handleOnChangeField(e, row.id)}
                  />
                ) : (
                  row.ru
                )}
              </div>
              <div>
                {isEditMode && rowIDToEdit === row.id ? (
                  <input
                    className={style.input}
                    defaultValue={editedRow ? editedRow.tr : row.tr}
                    id={row.id}
                    name="tr"
                    onChange={(e) => handleOnChangeField(e, row.id)}
                  />
                ) : (
                  row.tr
                )}
              </div>

              {actions && (
                <div className={style.buttons}>
                  {isEditMode && rowIDToEdit === row.id ? (
                    <button
                      onClick={() => handleSaveRowChanges()}
                      className={style.button}
                      //disabled={!editedRow && !isValid}
                      disabled={!(editedRow && !isValid)}
                      
                    >
                      Сохранить
                    </button>
                  ) : (
                    <div
                      onClick={() => handleEdit(row.id)}
                      className={style.button}
                    >
                      Редактировать
                    </div>
                  )}

                  {isEditMode && rowIDToEdit === row.id ? (
                    <div
                      onClick={() => handleCancelEditing()}
                      className={style.button}
                    >
                      Отменить
                    </div>
                  ) : (
                    <div
                      onClick={() => handleRemoveRow(row.id)}
                      className={style.button}
                    >
                      Удалить
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
