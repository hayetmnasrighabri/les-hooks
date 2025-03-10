import React, { createContext, useReducer } from 'react'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
import { reducer, initialState } from './reducer'

 export const CountContext= createContext()
function App() {
  const [count, dipatch]= useReducer(reducer, initialState)
  return (
    <div>
      <h1>count: {count}</h1>
     <CountContext.Provider value={{countState: count, countDispatch: dipatch}}>
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
    </CountContext.Provider>
     
    </div>
  )
}

export default App
