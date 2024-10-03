import React from 'react'
import { useState } from 'react'
const Contact = () => {
  const [number, setNumber] = useState(0);

 const increase =()=>{
  setNumber(number+1);
 }
 
  const decrease = () => {
    setNumber(number - 1);
  }
  return (
    <div>
      <div>{number}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}> -</button>
    </div>
  )
}

export default Contact
