import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../store/AuthContext'

const PublicRoutes = () => {
    const { userDetails } = useAuthContext() as any

    // If token exists, render an empty page instead of navigating
    return userDetails?.token ? <Navigate to='/home'/> : <Outlet />
}

export default PublicRoutes;
