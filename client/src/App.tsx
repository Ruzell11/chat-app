import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './modules/pages/Login'
import Register from './modules/pages/Register'
import Home from './modules/pages/Home'

function App() {

  return (
   
      <Router>
        <Routes>
          <Route path='/' Component={Login}/>
          <Route path='/register' Component={Register}/>
          <Route path='/home' Component={Home}/>
        </Routes>
      </Router>

  )
}

export default App
