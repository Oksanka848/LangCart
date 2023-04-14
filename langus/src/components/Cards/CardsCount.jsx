import React from 'react'
import Card from './Card'
const CardsCount = React.forwardRef(({ countWord }, ref) => (

  
  <Card onChange={countWord} ref={ref}/>
));





export default CardsCount;
