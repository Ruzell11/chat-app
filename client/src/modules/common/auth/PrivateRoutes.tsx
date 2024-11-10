import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../store/AuthContext'

const PrivateRoutes = () => {
    const { userCookie } = useAuthContext() as any

    // Check if userCookie is defined and not empty before parsing
    const jsonCookie = userCookie ? JSON.parse(userCookie) : null;

    console.log(jsonCookie?.token)
  
    return jsonCookie?.token ? <Outlet /> : <Navigate to='/' />
}

export default PrivateRoutes;
