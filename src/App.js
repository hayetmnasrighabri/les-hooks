import React from 'react'
import ComponentA from './components/ComponentA'
import { createContext } from 'react'
export const userContext = createContext()
export const channelContext = createContext()
function App() {
  return (
    <div>
      <userContext.Provider value={"Hayet"}>
        <channelContext.Provider value={"Simple Arab Code"}>
              <ComponentA/>
        </channelContext.Provider>
      </userContext.Provider>
      
    </div>
  )
}

export default App
