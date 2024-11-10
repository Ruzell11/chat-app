import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../store/AuthContext'

const PublicRoutes = () => {
    const { userCookie } = useAuthContext() as any
    const jsonCookie = userCookie ? JSON.parse(userCookie) : null;

    // If token exists, render an empty page instead of navigating
    return jsonCookie?.token ? <Navigate to='/home'/> : <Outlet />
}

export default PublicRoutes;
