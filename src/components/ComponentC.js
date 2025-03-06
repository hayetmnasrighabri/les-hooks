import {React, useContext} from 'react'
import { userContext, channelContext } from '../App'
function ComponentC() {
    const user=useContext(userContext)
    const channel = useContext(channelContext)
  return (
    <div>
      <h1>My name is {user} channel is {channel} </h1>
    </div>
  )
}

export default ComponentC
