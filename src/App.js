import React, { useState } from 'react'
import Blog from './contextExp3/Blog'
import {LocalContext} from './contextExp3/LocalContext'
function App() {
  const [locale, setLocale] = useState('en')
  const toggleLocale=()=>{
    setLocale((locale)=>{
      return(
      locale==='en'? 'ar': 'en'
    )})
  }
  return (
    <LocalContext.Provider value={{locale, toggleLocale}}>
      <Blog/>
    </LocalContext.Provider>
  )
}

export default App
