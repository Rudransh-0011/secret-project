import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../features/authSlice'

export default function Login(){
  const dispatch = useDispatch()
  const error = useSelector(s=>s.auth.error)
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')

  const submit=e=>{
    e.preventDefault()
    dispatch(loginUser({username,password}))
  }

  return (
    <div style={{textAlign:'center',padding:120}}>
      <h2>Private Access</h2>
      <form onSubmit={submit}>
        <input placeholder="username" onChange={e=>setUsername(e.target.value)} /><br/><br/>
        <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)} /><br/><br/>
        <button>Login</button>
      </form>
      {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  )
}
