import { Outlet } from 'react-router-dom'
import NavBar from './containers/nav-bar/nav-bar'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App
