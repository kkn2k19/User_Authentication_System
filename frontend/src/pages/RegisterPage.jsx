import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    TextField, Button, Box, Container, Paper, Typography,
    FormControl, InputLabel, Select, MenuItem
} from '@mui/material'
import authService from '../services/AuthService'

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        role: 'ROLE_USER'
    })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await authService.register(formData)
            setSuccess('Registration successful! Redirecting...')
            setTimeout(() => navigate('/login'), 1500)
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed')
        }
    }

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>Register</Typography>
                {error && <Typography color="error" align="center">{error}</Typography>}
                {success && <Typography color="success.main" align="center">{success}</Typography>}
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
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Role</InputLabel>
                        <Select
                            name="role"
                            value={formData.role}
                            label="Role"
                            onChange={handleChange}
                        >
                            <MenuItem value="ROLE_USER">User</MenuItem>
                            <MenuItem value="ROLE_ADMIN">Admin</MenuItem>
                        </Select>
                    </FormControl>
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                        Register
                    </Button>
                </Box>
            </Paper>
        </Container>
    )
}

export default RegisterPage