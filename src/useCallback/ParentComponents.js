import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import  Button  from './Button'

function ParentComponents() {
  const [age, setAge]= useState(20)
  const [salary, setSalary]= useState(8000)
 const incrementAge = useCallback(()=>{
    setAge(age+1)
 },[age])
 const incrementSalary=useCallback(()=>{
    setSalary(salary+1000)
 },[salary])
  return (
    <div>
      <Title/>
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>increment Age</Button>
      <Count text="Salary" count={salary}/>
      <Button handleClick={incrementSalary}>increment Salary</Button>
    </div>
  )
}

export default ParentComponents

