import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../features/authSlice'

export default function NavBar(){
  const user = useSelector(s=>s.auth.user)
  const dispatch = useDispatch()

  return (
    <nav style={{display:'flex',justifyContent:'space-between',padding:20}}>
      <div style={{display:'flex',gap:20}}>
        <Link to="/">Home</Link>
        {user && <Link to="/explore">Explore</Link>}
        {user && <Link to="/confess">Confess</Link>}
        {user && <Link to="/goals">Goals</Link>}
      </div>
      <div>
        {user && <span style={{marginRight:15}}>Hi {user.username} ❤️</span>}
        {user && <button onClick={()=>dispatch(logout())}>Logout</button>}
      </div>
    </nav>
  )
}
