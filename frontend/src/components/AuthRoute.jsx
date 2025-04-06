import { Navigate } from 'react-router-dom'

const AuthRoute = ({ children, isAuthenticated }) => {
    return isAuthenticated ? <Navigate to="/profile" replace /> : children
}

export default AuthRoute