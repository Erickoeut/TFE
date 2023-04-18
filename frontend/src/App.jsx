import { Outlet } from 'react-router-dom'
import NavBar from './containers/nav-bar/nav-bar'
import AdminLateralBar from './containers/admin-lateral-bar/admin-lateral-bar'
import "./app.scss"

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { userConnect } from './store/actions/user.action'

function App() {
  const user = useSelector(state=>state.user.user)
  const dispatch=useDispatch()
  useEffect(()=>{
    if(!user){
      const tokenJson = JSON.parse(localStorage.getItem('token'))

      if(tokenJson){
        axios.get('http://localhost:3000/api/users',{headers: { 'Authorization': `Bearer ${tokenJson}`}})
        .then(({data})=>{
          dispatch(userConnect({
            "username":data.username,
            "teamId":data.teamId
          }))
        })}
        
      }
  },[])
  return (
    <div className="App">
      <NavBar user={user}/>
      <main>
        <Outlet />
        {user&&<AdminLateralBar user={user}/>}
      </main>
    </div>
  )
}

export default App