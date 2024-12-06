import React, { useContext } from 'react'
import { ProductContext } from '../App'
function Item() {
  const vl= useContext(ProductContext)
  return (
    <div className='item'>
     <p>{vl}</p> 
    </div>
  )
}

export default Item
