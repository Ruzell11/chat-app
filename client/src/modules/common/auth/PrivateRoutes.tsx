import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../store/AuthContext'

const PrivateRoutes = () => {
    const { userDetails } = useAuthContext() as any;
  
    return userDetails?.token ? <Outlet /> : <Navigate to='/' />
}

export default PrivateRoutes;
