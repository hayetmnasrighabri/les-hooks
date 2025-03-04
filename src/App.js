import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [post, setPost]= useState({})
  const [id, setId]= useState("")
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response)=>{
      setPost(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })  
  })
  return (
    <div>
    <input type='text' value={id} onChange={(e)=>setId(e.target.value)}/>
    <h1>{post.title}</h1>    
    </div>
  )
}

export default App
