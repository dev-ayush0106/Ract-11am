import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import Bg from "../assets/bg-slate.png";
import Black from '../assets/black.png'
import Coffee from '../assets/coffee/coffee1.png'
import {motion} from 'motion/react'

let s={
    backgroundImage:Bg
}

let one={
    id:1,
    image: Coffee,

}
const Home = () => {
  return (
    <div>
      <div className='hero'>
        <Navbar/>
        <motion.h1 initial={{y:100}} animate={{y:0,type:"spring"}} transition={{delay : 0.8}} style={{width:"10%",fontSize:"2.7rem", color:"white", position:"relative" ,left:"40px"}}>Blvck Tumbler</motion.h1>
        
        <div className='coffee-mug'>
            <motion.img initial={{scale:0}} animate={{scale:1.2 , type:"spring"}}
            transition={{duration:0.3}} src={Black} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
