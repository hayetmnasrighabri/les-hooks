import {React, useState} from 'react'

function App() {
  const [name, setName]=useState({
    firstname:"",
    lastname:"",
  })

  return (
    <div>
     <input 
         type='text' 
         placeholder='firstname'
         value={name.firstname}
         onChange={(e)=>setName({...name, firstname:e.target.value})}
         /> 
      <input 
        type='text'
        placeholder='lastname'
        value={name.lastname}
        onChange={(e)=>setName({...name, lastname: e.target.value})}
      />
      <h1>your firstname: {name.firstname}</h1>
      <h1>your lastname: {name.lastname}</h1>
    </div>
  )
}

export default App