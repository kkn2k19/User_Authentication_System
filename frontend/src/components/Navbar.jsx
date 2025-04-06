import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ authState, setAuthState }) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        setAuthState({ isAuthenticated: false, userRole: null })
        navigate('/login')
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    User Authentication System
                </Typography>
                {!authState.isAuthenticated ? (
                    <>
                        <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
                        <Button color="inherit" onClick={() => navigate('/register')}>Register</Button>
                    </>
                ) : (
                    <>
                        <Button color="inherit" onClick={() => navigate('/profile')}>Profile</Button>
                        {authState.userRole === 'ROLE_ADMIN' && (
                            <Button color="inherit" onClick={() => navigate('/admin')}>Admin</Button>
                        )}
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar