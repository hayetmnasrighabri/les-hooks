import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
function App() {
  const [user, setUser]= useState('')
  const refInput= useRef(null)
  useEffect(()=>{
    refInput.current.focus()
    refInput.current.value=('hayet')
  },[])
  return (
    <div>
     <h1>Hooks [useRef]</h1>
     <input  ref={refInput} type='text' onChange={(e)=>setUser(e.target.value)}/>
     {user}
    </div>
  )
} 
export default App
