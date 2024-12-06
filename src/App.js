import React, { createContext, useState } from 'react'
import Sidebar from './components/Sidebar'
import Widget from './components/Widget'

export const ProductContext=createContext()
function App() {
  const [product, setProduct]= useState('LapTop')
  return (
   
      <ProductContext.Provider value={product}>
        <div className='App'>
      <h1>Hooks [useContext]</h1>
      <Sidebar/>
      <Widget/>
      </div>
      </ProductContext.Provider>
    
  )
}

export default App
