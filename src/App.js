import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [loading, setLoading]= useState(true)
  const [error, setError]= useState("")
  const [post, setPost]= useState({})
  useEffect(()=>{
    axios
       .get(`https://jsonplaceholder.typicode.com/posts/1`)
       .then((response)=> {
        setLoading(false);
        setError("");
        setPost(response.data)
       })
       .catch((error)=>{
        setLoading(false);
        setError("something went wrong");
        setPost({})
       })
  },[])
  return (
    <div>
      {loading ? "Loading...": post.map((posts)=>(
        <div key={posts.id}>
          {posts.title}
        </div>
      ))}
      {error ? error: null}

    </div>
  )
}

export default App
