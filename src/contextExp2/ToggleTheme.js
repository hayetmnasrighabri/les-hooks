import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function ToggleTheme() {
    const themeContext= useContext(ThemeContext)
  return (
    <div>
      <button onClick={themeContext.toggleTheme}>
        ToggleTheme
      </button>
    </div>
  )
}

export default ToggleTheme
