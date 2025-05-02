import React from 'react'
import { useNavigate } from 'react-router-dom'

const Routing = () => {

  let navigate=useNavigate();
  
  function handleClick(){
    navigate("/courses")
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Move to Courses Page</button>
    </div>
  )
}

export default Routing
