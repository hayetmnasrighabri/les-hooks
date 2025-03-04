import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [x, setX]= useState(0)
  const [y, setY] = useState(0)
  const loadMousePosition=(e)=>{
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(()=>{
    console.log('useEffect called')
    window.addEventListener('mousemove',loadMousePosition)
  },[])
  return (
    <div>
     <h1>X- {x}</h1>
     <h1>Y- {y}</h1>  
    </div>
  )
}

export default App