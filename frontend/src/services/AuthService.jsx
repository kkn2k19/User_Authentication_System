import axios from 'axios'

const API_URL = 'http://localhost:1111/api'

const register = (formData) => {
    return axios.post(`${API_URL}/register`, formData)
}

const login = (formData) => {
    return axios.post(`${API_URL}/login`, formData)
        .then(response => {
            if (response.data.token) {
                localStorage.setItem('token', response.data.token)
            }
            return response.data
        })
}

// ... (other service functions remain the same)

export default {
    register,
    login,
    logout: () => localStorage.removeItem('token'),
    getCurrentUser: () => localStorage.getItem('token'),
    getUserProfile: () => axios.get(`${API_URL}/user/profile`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }),
    getAdminData: () => axios.get(`${API_URL}/admin`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
}