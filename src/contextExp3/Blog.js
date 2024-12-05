import React, { useContext } from 'react'
import {LocalContext} from './LocalContext'
function Blog() {
    const {locale, toggleLocale}=useContext(LocalContext)
  return (
    //<LocalContext.Consumer>
      //  {data=>{
        //    return(
          //      <>
            //    <h1>the "value" prop passed to "Provider" was {data.locale}</h1>
             //   <button onClick={data.toggleLocale}>change locale</button>
               // </>
            //)
            
        //}}
    //</LocalContext.Consumer>
    <>
        <h1>the "value" prop passed to "Provider" was {locale}</h1>
        <button onClick={toggleLocale}>change locale</button>
   </> 
)
}

export default Blog
