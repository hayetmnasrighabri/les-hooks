import React from 'react'
import { useRef } from 'react'
function App() {
  const firstname=useRef()
  const age=useRef()
  return (
    <div>
      <input type='text' ref={firstname} /><br/>
      <button onClick={()=>console.log(firstname.current.value)}>Print firstname</button><br/>
      <input type='number' ref={age} /><br/>
      <button onClick={()=>console.log(age.current.value)}>Print age</button>
    </div>
  )
}

export default App
