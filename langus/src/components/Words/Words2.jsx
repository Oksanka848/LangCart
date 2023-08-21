import React, {useState, useEffect} from 'react'

import style from './style.module.scss';

export default function Words2() {
	let [words, setWords] = useState ([ ]);
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
    if (error) {
      return <p>{error.message}</p>;
  }

  if (isLoading) {
      return <p>Loading ...</p>;
  }
  

    return (
			   
                 <><div className={style.container}>
                 <div className={style.listcontainer}>
                 <ol>
             {
                words.map(word => {
                    return <li key={word.id}>{word.english} - {word.russian}</li>
                })
             }
	       </ol>
                 </div>
               </div> </> ) }
