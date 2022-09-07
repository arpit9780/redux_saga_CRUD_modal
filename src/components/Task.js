import React, { useEffect, useState } from 'react'

export const Task = () => {
    const [val,setVal] = useState(true)
    useEffect(()=>{
console.log(val)
    },[])
  return (
    <div className='container'>
        <h1>Task</h1>
        <select name="language">
    <option value="alphabets" onClick={()=>setVal(true)}>alphabets</option>
    <option value="number" onClick={()=>setVal(false)}>Numeric</option>
  </select>
    <input type={val ? "text":"number"}  onChange={(eve)=>{ eve.target.value}}/>
    <button className='btn btn-primary' type="submit">submit</button>
        </div>
  )
}
