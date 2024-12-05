import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
function Header() {
    const themeContext= useContext(ThemeContext)

    let style={}
    if(themeContext.theme==='dark'){
        style={
            background: 'blue',
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
      Header
      <hr/>
      <hr/>
    </div>
  )
}

export default Header
