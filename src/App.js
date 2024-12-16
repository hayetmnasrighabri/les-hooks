import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
    const inputRef= useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>
      <input type='text' ref={inputRef}/>
    </div>
  )
}

export default App
