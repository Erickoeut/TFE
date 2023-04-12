import { Outlet } from 'react-router-dom'
import NavBar from './containers/nav-bar/nav-bar'
import AdminLateralBar from './components/admin-lateral-bar/admin-lateral-bar'
import "./app.scss"

import { useSelector } from 'react-redux'
function App() {
  const user = useSelector(state=>state.user.user)
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