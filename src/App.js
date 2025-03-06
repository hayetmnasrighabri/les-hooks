import React from 'react'
import { useReducer } from 'react'
import { initialValue } from './reducer'
import { reducer } from './reducer'
function App() {
  const [countOne, dispatch]= useReducer(reducer, initialValue)
  const [countTwo, dispatchTwo]= useReducer(reducer, initialValue)
  return (
    <div>
      {countOne}<br/>
      <button onClick={()=>dispatch('increment')}>+</button>
      <button onClick={()=>dispatch('decrement')}>-</button>
      <button onClick={()=>dispatch('reset')}>reset</button><br/>
      {countTwo}<br/>
      <button onClick={()=>dispatchTwo('increment')}>+</button>
      <button onClick={()=>dispatchTwo('decrement')}>-</button>
      <button onClick={()=>dispatchTwo('reset')}>reset</button>
    </div>
  )
}

export default App
