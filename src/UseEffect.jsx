import React, { useEffect, useState } from 'react'

const UseEffect = () => {

   const [count,setCount] = useState(0)

   const increase =()=>{
    setCount(count+1)
   }
  useEffect(()=>{
    console.log('Hello world')
  })
  return (
    <div>
      <div>{count}</div>
      <button onClick={increase}> +</button>
    </div>
  )
}

export default UseEffect
