import React, { useState } from 'react'

function App() {
  const [count, setCount]= useState(0)
  const [title, setTitle]=useState("comprendre useState")
  const [time, setTime]= useState(0)
  const handleIncrement=()=>{
    setCount(count+1)
    console.log(count)
  }

  const handleChangeTitle=()=>{
    setTitle("Hello world")
    
  }
  const handleLaunchTime=()=>{
    setInterval(()=>{
      console.log('Time', time)
     // setTime(time+1)
     setTime((prevTime)=>{
      console.log('PREV TIME', prevTime)
        return( 
          prevTime + 1
        )
     })
  },1000)
}
  return (
    <div>
      <h1>{title}</h1>
      <h2>count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleChangeTitle}>Change Title</button>
     <h2>Clock: {time}</h2>
     <button onClick={handleLaunchTime}>Launch Clock</button>
    </div>
  )
}

export default App
