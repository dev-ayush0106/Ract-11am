import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <h1>Logo</h1>
        <ul>
            {/* <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/contactus">Contact Us</a></li> */}

            {/* <li><Link to='/'>Home</Link></li>
            <li><Link to='/courses'>Courses</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/contactus'>Contact Us</Link></li> */}

            <li><NavLink to='/' className={({isActive})=> isActive?"s":""}>Home</NavLink></li>
            <li><NavLink to='/courses' className={({isActive})=> isActive?"s":""}>Courses</NavLink></li>
            <li><NavLink to='/dashboard' className={({isActive})=> isActive?"s":""}>Dashboard</NavLink></li>
            <li><NavLink to='/contactus' className={({isActive})=> isActive?"s":""}>Contact Us</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
