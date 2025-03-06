import React from 'react'
import { userContext, channelContext } from '../App'
function ComponentC() {
  return (
    <div>
        <userContext.Consumer>
            {(user)=>{
                return(
                 <channelContext.Consumer>
                    {(channel)=>{
                      return(
                        <h1>My name is {user} channel is {channel} </h1>
                      )
                    }}
          </channelContext.Consumer>
                )
            }}
          
        </userContext.Consumer>
    
    </div>
  )
}

export default ComponentC
