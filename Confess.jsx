import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Confess(){
  const [hideNo,setHideNo]=useState(false)
  const [pos,setPos]=useState({})
  const [celebrate,setCelebrate]=useState(false)

  const move=()=>{
    setPos({transform:`translate(${Math.random()*300-150}px,${Math.random()*200-100}px)`})
  }

  return (
    <motion.div initial={{scale:0.9}} animate={{scale:1}} style={{textAlign:'center',padding:120}}>
      <h1>Will you be my Valentine? 💘</h1>
      <div style={{marginTop:50}}>
        <button style={{background:'green',color:'#fff'}} onClick={()=>setCelebrate(true)}>Yes</button>
        {!hideNo && <button style={{marginLeft:20,...pos,background:'red',color:'#fff'}} onMouseEnter={move} onClick={()=>setHideNo(true)}>No</button>}
      </div>
      {celebrate && <motion.h2 initial={{opacity:0}} animate={{opacity:1}} style={{marginTop:40}}>She said YES ❤️🎉</motion.h2>}
    </motion.div>
  )
}
