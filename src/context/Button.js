import React, { useContext } from 'react'
import UserContext from './UserContext'
function Button() {
  const {setUserOne}= useContext(UserContext)
  return (
  <button onClick={()=>
                   {setUserOne('ahmed ahmed')}
                  }>cliquer ici</button>
  )
}

export default Button
