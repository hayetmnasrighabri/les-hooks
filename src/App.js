import React from 'react'
import ThemeProvider from './contextExp2/ThemeContext'
import Header from './contextExp2/Header'
import Login from './contextExp2/Login'
import ToggleTheme from './contextExp2/ToggleTheme'
 function App() {
  return (
    <ThemeProvider>
      <Header/>
      <ToggleTheme/>
      <Login/>
    </ThemeProvider>
  )
}
export default App