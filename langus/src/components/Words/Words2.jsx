import React, {useState, useEffect} from 'react'

import style from './style.module.scss';

export default function Words2() {
	let [words, setWords] = useState ([]);
  let [isLoading, setisLoading] = useState (false);
  let [error, setError] = useState (null);
	
	  useEffect(() =>{                     
      setisLoading(true);
        fetch('api/words')
            .then((response) => {
              if (response.ok) {
              response.json();}
            else {throw new Error('Something went wrong ...')}
            })
            .then((response) => {setWords(response); setisLoading(false);})
            .catch((error) => {setError(error); setisLoading(false);});
    }, [ ]); 
    

    return (
			   <>
      { isLoading ? (<div>Loading...</div>) : error ? ( <div>{error.message}</div> ) : (
                 <><div className={style.container}>
                 <div className={style.listcontainer}>
                   {
                     words.map((word) => 
                       <li key={word.id}> {word.english} - {word.russian} - {word.transcription}</li>
                    
                     )
                   }
                 </div>
               </div> </> ) } </>)}
