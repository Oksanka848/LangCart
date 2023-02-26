import React from 'react';

import style from '../Cards/style.module.scss';

export default function Slides ({words}) {
 
  const { en, tr, ru, id } = words;
  
  return (
    <div className={style.card}>
      <div className={style.wordwrap}>
        <div className={style.item} >{en}</div>
        <div className={style.item} >{tr}</div>
        <div className={style.item} >{ru}</div>
        <div className={style.index}>{id}</div>
      </div>
      
    </div>
  )
}
/*const [activeIndex, setActiveIndex] = useState(0);
 
// Хук Effect
useEffect(() => {
    // Запускаем интервал
    const interval = setInterval(() => {
        // Меняем состояние
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись
            const res = current === img.length - 1 ? 0 : current + 1
            // Возвращаем индекс
            return res
        })
    }, 3000)
    // Выключаем интервал
    return () => clearInterval()
}, [])
 
// Вычисляем индекс предыдущего слайда
const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
// Вычисляем индекс следующего слайда
const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1
<div className={style.container_slider}>
    {words.children}
    <button onClick={prevImgIndex}  >&#8592;</button>
    
    <Slides key={words[count]} words = {words[count]}
    className={count === words[count] + 1 ? " active" : " "}
    />        
    <button onClick={nextImgIndex} >&#8594;</button> 
              
               
            
                </div>




{click ? (
          <div className={style.item} onClick={handleClick} >{ru}</div>
        ) : (
          <button className={style.button_tr} onClick={handleClick} >Перевод</button>
        )}*/
        /*function handleNext(){
          if(count !== 0){
            setCount(count - 1)
          }
          else if (count === 0){
            setCount(Slides.length)
          }
        }*/
