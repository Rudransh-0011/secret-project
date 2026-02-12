import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Confess from './pages/Confess'
import Goals from './pages/Goals'
import Login from './pages/Login'

function Protected({children}){
  const user = useSelector(s=>s.auth.user)
  return user ? children : <Navigate to="/login"/>
}

export default function App(){
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/explore" element={<Protected><Explore/></Protected>}/>
        <Route path="/confess" element={<Protected><Confess/></Protected>}/>
        <Route path="/goals" element={<Protected><Goals/></Protected>}/>
      </Routes>
    </>
  )
}
