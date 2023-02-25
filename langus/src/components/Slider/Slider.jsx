import React, { useState, useEffect } from 'react';
import words from '../diction.json';
//import Cards from '../Cards/Cards';
import Slides from './Slides';
import style from './style.module.scss';

export default function Slider() {
const [count, setCount] = useState (0);

function handlePrev(){
  setCount(count - 1);

    
};
function handleNext(){
  setCount(count + 1)
};



return (
  <>
    <div className={style.container_slider}>
    <button onClick={handlePrev}  >&#8592;</button>
    
    <Slides words = {words[count]}
    
    />        
    <button onClick={handleNext} >&#8594;</button> 
              
               
            
                </div>
                
                </>
                  
)

}

