import React from 'react'
import { useReducer } from 'react'
const initialState=
{
  firstCount: 0,
  secondCount: 2,
}
const reducer=(state, action)=>{
  switch (action.type) {
    //count One//
    case "increment":
      return {...state, firstCount: state.firstCount + action.value}
    case "increment5":
      return{...state, firstCount: state.firstCount+ action.value}
    case "decrement":
      return {...state, firstCount: state.firstCount - action.value}
    case "decremnet5":
      return {...state, firstCount: state.firstCount - action.value}
      //count two//
    case "incrementTwo":
        return {...state, secondCount: state.secondCount + action.value}
    case "decrementTwo":
        return {...state, secondCount: state.secondCount - action.value}
    case "Reset":
      return initialState
    default:
      return state
  }
}
function App() {
  const[count, dispatch]= useReducer(reducer, initialState)
  return (
    <div>
      <h1>count One:{count.firstCount}</h1><br/>
      <button onClick={()=>dispatch({type: "increment", value: 1})}>increment</button>
      <button onClick={()=>dispatch({type: "increment", value: 5})}>increment5</button>
      <button onClick={()=>dispatch({type: "decrement", value:1})}>decrement</button>
      <button onClick={()=>dispatch({type: "decrement", value:5})}>decrement5</button>
      <button onClick={()=>dispatch({type: "Reset"})}>Reset</button> <br/><br/>
       <h1>count two: {count.secondCount}</h1>
      <button onClick={()=>dispatch({type: "incrementTwo", value: 1})}>increment</button>
      <button onClick={()=>dispatch({type: "decrementTwo", value:1})}>decrement</button>
      <button onClick={()=>dispatch({type: "Reset"})}>Reset</button> <br/><br/>
    </div>
  )
}
export default App