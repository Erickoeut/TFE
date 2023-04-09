import { Outlet } from 'react-router-dom'
import NavBar from './containers/nav-bar/nav-bar'
import AdminLateralBar from './components/admin-lateral-bar/admin-lateral-bar'
import "./app.scss"
function App() {

  return (
    <div className="App">
      <NavBar/>
      <div className='content'>
      <Outlet/>
      {/* <AdminLateralBar/> */}

      </div>
    </div>
  )
}

export default App
