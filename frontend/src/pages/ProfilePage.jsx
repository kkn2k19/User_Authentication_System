import { useState, useEffect } from 'react'
import { Typography, Box, Container, Paper, CircularProgress, Alert } from '@mui/material'
import authService from '../services/AuthService'

const ProfilePage = () => {
    const [profileData, setProfileData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setLoading(true)
                const response = await authService.getUserProfile()
                setProfileData(response.data)
                setError(null)
            } catch (err) {
                console.error('Profile fetch error:', err)
                setError(err.response?.data?.message || 'Failed to load profile')
            } finally {
                setLoading(false)
            }
        }
        
        fetchProfile()
    }, [])

    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h4" gutterBottom>Your Profile</Typography>
                
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
                
                {profileData && (
                    <Box>
                        <Typography variant="body1">
                            {typeof profileData === 'string' 
                                ? profileData 
                                : JSON.stringify(profileData, null, 2)}
                        </Typography>
                    </Box>
                )}
            </Paper>
        </Container>
    )
}

export default ProfilePage