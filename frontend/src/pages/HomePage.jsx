import { Typography, Box } from '@mui/material'

const HomePage = () => (
    <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
            Welcome to Auth System
        </Typography>
        <Typography>
            Please login or register to continue
        </Typography>
    </Box>
)

export default HomePage