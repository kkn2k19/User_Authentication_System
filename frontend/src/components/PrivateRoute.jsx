import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children, isAuthenticated, requiredRole, userRole }) => {
    if (!isAuthenticated) return <Navigate to="/login" replace />
    if (requiredRole && userRole !== requiredRole) return <Navigate to="/profile" replace />
    return children
}

export default PrivateRoute