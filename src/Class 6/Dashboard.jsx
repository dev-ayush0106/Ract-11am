import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  let navigate=useNavigate();
  
  function handleClick(){
    navigate("/contactus")
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleClick}>Move to Contact</button>
    </div>
  )
}

export default Dashboard
