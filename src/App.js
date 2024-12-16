import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
    const [timer, setTimer]=useState(0)
    const intervalRef= useRef(null)
    useEffect(()=>{
     intervalRef.current = setInterval(()=>{
        setTimer(prevTimer => prevTimer + 1)
     }, 1000)
     return ()=>{
        clearInterval(intervalRef.current)
     }
    },[])
  return (
    <div>
      <h1>timer-{timer}</h1>
      <button onClick={()=>clearInterval(intervalRef.current)}>clear Timer</button>
    </div>
  )
}

export default App