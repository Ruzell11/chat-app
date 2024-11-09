import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './modules/pages/Login'
import Register from './modules/pages/Register'

function App() {

  return (
    <main className='bg-gray-300 h-screen'>
      <Router>
        <Routes>
          <Route path='/' Component={Login}/>
          <Route path='/register' Component={Register}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
