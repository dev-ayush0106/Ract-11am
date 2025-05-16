import React from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import {motion} from 'motion/react';

const Navbar = () => {
  return (
    <motion.div initial={{opacity:0 , y:100}} animate={{y:0,opacity:1 , type:"spring"}} className='navigation'>
      <h1 style={{color:"white"}}>CODERS COFFEE</h1>
      <GiHamburgerMenu style={{color:"white", fontSize:"1.5rem"}} />
    </motion.div>
  )
}

export default Navbar
