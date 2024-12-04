import React ,{useContext}from 'react'
import { userContext, themeContext } from './Page'
function User() {
    const user= useContext(userContext)
    const theme= useContext(themeContext)
  return (
        <div>
             {user.name} | {theme.name}
        </div>
    
   
  )
}

export default User
