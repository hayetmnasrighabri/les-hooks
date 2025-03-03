import React from 'react'
import { useState } from 'react'
import "./App.css"
function App() {
    const [count, setCount]= useState(0)
    const [isRed, setRed]= useState(false)
    const handleClick=()=>{
        setCount(count+1)
        setRed(!isRed)
    }
    return (
    <div className='app'>
      <button className='btn' onClick={handleClick}>
        Increment
        </button>
      <h1>{count}</h1><hr/>
      <h1 className={isRed? 'red': ""}>change My Color</h1>
    </div>
  )
}

export default App
