import { useState, useEffect } from 'react'
import { Typography, Box, Container, Paper, CircularProgress, Alert } from '@mui/material'
import authService from '../services/AuthService'

const AdminPage = () => {
    const [adminData, setAdminData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                setLoading(true)
                const response = await authService.getAdminData()
                setAdminData(response.data)
                setError(null)
            } catch (err) {
                console.error('Admin data fetch error:', err)
                setError(err.response?.data?.message || 'Failed to load admin data')
            } finally {
                setLoading(false)
            }
        }
        
        fetchAdminData()
    }, [])

    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
                
                {loading && (
                    <Box display="flex" justifyContent="center">
                        <CircularProgress />
                    </Box>
                )}
                
                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}
                
                {adminData && (
                    <Box>
                        <Typography variant="body1">
                            {typeof adminData === 'string' 
                                ? adminData 
                                : JSON.stringify(adminData, null, 2)}
                        </Typography>
                    </Box>
                )}
            </Paper>
        </Container>
    )
}

export default AdminPage