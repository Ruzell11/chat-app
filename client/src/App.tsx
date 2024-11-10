import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './modules/pages/Login';
import Register from './modules/pages/Register';
import Home from './modules/pages/Home';
import PrivateRoutes from './modules/common/auth/PrivateRoutes';
import PublicRoutes from './modules/common/auth/PublicRoutes';

function App() {


  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/home' element={<Home />} />
        </Route>

        <Route element={<PublicRoutes />}>
          <Route path='/register' element={<Register />} />
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
