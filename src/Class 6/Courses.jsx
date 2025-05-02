import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Courses = () => {
  let navigate=useNavigate();
  
  function handleClick(){
    navigate("/dashboard")
  }
  return (
    <div>
      <h1>Courses</h1>
      <button onClick={handleClick}>Move to Dashboard</button>
      <Outlet/>
    </div>
  )
}

export default Courses
