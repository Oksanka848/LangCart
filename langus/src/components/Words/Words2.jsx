import React, { useState, useEffect } from 'react'
import Wordslist2 from './Wordslist2';
import style from './style.module.scss';

export default function Words2() {
  const [words, setWords] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('api/words')
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then(
        (result) => {
          setWords(result);
        })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setisLoading(true);
      });
  }, []);

  if (error) {
    return <p>{error.message}</p>;
  }

  else if (!isLoading) {
    return <p>Loading ...</p>;
  }
  else {
    return (
      <><div className={style.container}>
        <div className={style.listcontainer}>
          <div type="text" className={style.item}> Слово</div>
          <div type="text" className={style.item}>Перевод</div>
          <div type="text" className={style.item}>Транскрипция</div>
          {
            words.map(word => {
              return <Wordslist2 key={word.id} english={word.english} russian={word.russian} transcription={word.transcription} />
            })
          }
        </div >
      </div></>)
  }
}
