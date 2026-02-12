import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} style={{textAlign:'center',padding:120}}>
      <h1 style={{fontSize:48}}>Forever & Always ❤️</h1>
      <div style={{marginTop:50,display:'flex',justifyContent:'center',gap:20}}>
        <Link to="/login"><button style={{background:'#ff4d88',color:'#fff'}}>Enter</button></Link>
      </div>
    </motion.div>
  )
}
