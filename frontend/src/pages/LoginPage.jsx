import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Button, Box, Container, Paper, Typography } from '@mui/material'
import authService from '../services/AuthService'

const LoginPage = ({ setAuthState }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await authService.login(formData)
            const token = response.token
            const payload = JSON.parse(atob(token.split('.')[1]))

            setAuthState({
                isAuthenticated: true,
                userRole: payload.role
            })
            navigate('/profile')
        } catch (err) {
            setError('Invalid credentials')
        }
    }

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>Login</Typography>
                {error && <Typography color="error" align="center">{error}</Typography>}
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        name="username"
                        label="Username"
                        fullWidth
                        margin="normal"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                        Login
                    </Button>
                </Box>
            </Paper>
        </Container>
    )
}

export default LoginPage