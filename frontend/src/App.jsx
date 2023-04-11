import { Outlet } from 'react-router-dom'
import NavBar from './containers/nav-bar/nav-bar'
import AdminLateralBar from './components/admin-lateral-bar/admin-lateral-bar'
import "./app.scss"
import { useState } from 'react'
function App() {
  const [user,setUser] = useState({
    name:"Eric",
    team:"team"
  })
  return (
    <div className="App">
      <NavBar user={user}/>
      <div className='content'>
        <Outlet />
        {user&&<AdminLateralBar user={user}/>}
      </div>
    </div>
  )
}

export default App