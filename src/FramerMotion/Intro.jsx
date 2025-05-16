import React from 'react'
import { motion } from 'motion/react' 
import './Intro.css'

const Intro = () => {
  return (
    <div>
      <motion.h1>Starting With Framer Motion</motion.h1>

      {/* <motion.div 
      className='box'
      animate={{
        x:[0,800,800,0,0],
        y:[0,0,300,300,0],
        rotate:[0,360,-360,0],
        // repeatCount:Infinity
      }}

      transition={{
        duration:2,
        repeat:4
      }}
      ></motion.div> */}


      <motion.div className='box1'
        drag
        whileDrag={{
            scale:0.8
        }}

        dragConstraints={{
            left:0,
            top:0,
            right:900,
            bottom:700
        }}

        whileTap={{
            backgroundColor:"red"
        }}

        whileHover={{
            scale:1.5
        }}
      >

      </motion.div>
    </div>
  )
}

export default Intro
