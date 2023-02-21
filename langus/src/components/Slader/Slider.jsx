import React from 'react'
import Cards from '../Cards/Cards'
import style from './style.module.scss';


function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "{style.next}" ? "{style.btn-slide next}" : "{btn-slide prev}"}
    >
      <img alt="" src={direction === "{style.next}" ? "{style.next}" : "{style.prev}" }/>
    </button>
  );
}

function Slids (){ 
  return (
  
      words.map((word) =>
        <Cards key={word.id} en={word.en} ru={word.ru} tr={word.tr}>
        </Cards>
      )
    
    );
  }
  export default function Slider() {
  
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== Slids.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === Slids.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(Slids.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className={style.containerslider}>
            {Cards.map((Card, index) => {

                return (
                    <Cards

                    key={index}
                    className={slideIndex === index + 1 ? "{slide active-anim}" : "{slide}"}
                    
                          >
              </Cards>)})}
              <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            <div className="container-dots">
                {Array.from({length: 5}).map((Card, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
                    </div>
                
            )}
