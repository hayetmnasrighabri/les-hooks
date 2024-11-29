import React, { useReducer } from 'react'

function App() {
  const initialValue=0
  const reducer=(state, action)=>{
     switch (action){
      case 'plus':
        return state+1
      case 'minse':
        return state-1
      case 'reset':
        return 0
      default:
        return state
     }
  }
  const [state, dispatch]=useReducer(reducer, initialValue)
  return (
    <div>
      {state}<br/>

      <button onClick={()=>dispatch('plus')}>+</button>
      <button onClick={()=>dispatch('minse')}>-</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
      
    </div>
  )
}

export default App
