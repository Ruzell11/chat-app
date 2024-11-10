import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './modules/pages/Login';
import Register from './modules/pages/Register';
import Home from './modules/pages/Home';
import PrivateRoutes from './modules/common/auth/PrivateRoutes';
import PublicRoutes from './modules/common/auth/PublicRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
