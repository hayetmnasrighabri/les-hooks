import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const[mohamed, setMohamed]=useState(0)
  const[x,setX]=useState(0)
  const r = useRef(null)
  useEffect(()=>{ 
    r.current.click()
  },[])
  const plushandler=()=>{
    setMohamed(mohamed+3)
  }

  const minsehandler=()=>{
    setMohamed(mohamed-1)
  }
  return (
    <div className='App'>
      <button  ref={r} onClick={plushandler}>+</button>
      <button onClick={minsehandler}>-</button>
      <button onClick={()=>setX(x+3)}>+</button>
      <button onClick={()=>setX(x-3)}>-</button>
      {mohamed}
      {x}
      <br/>
      <br/>
      <input/>
    </div>
  )
}

export default App
