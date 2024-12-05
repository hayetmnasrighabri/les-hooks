import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Login() {
    const themeContext= useContext(ThemeContext)
    let style={}
    if(themeContext.theme==="dark"){
        style={
            background: '#000',
            color:'#fff'
        }
    }else{
        style={
            background: '#fff',
            color:'blue'
        }
        }
  return (
    <div style={style}>
      Login
    </div>
  )
}

export default Login
