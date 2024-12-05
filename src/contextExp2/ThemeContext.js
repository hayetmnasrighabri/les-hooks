import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const ThemeContext= createContext()
function ThemeProvider(props) {
    const [theme, setTheme]= useState('dark')
    function toggleTheme(){
        setTheme(theme==='dark'? 'light':'dark')
    }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
       {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
