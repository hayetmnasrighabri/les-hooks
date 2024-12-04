import React, { createContext } from 'react'
import Layout from './Layout'
const user= {name: 'hayet'}
const theme= {name: 'white-theme'}
export const userContext = createContext(null)
export const themeContext= createContext(null)
function Page() {
 
    return (
      <userContext.Provider value={user}>
       <themeContext.Provider value={theme}>
         <Layout/>
       </themeContext.Provider>
      </userContext.Provider>
    
  )
}

export default Page
