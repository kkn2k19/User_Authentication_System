import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import AdminPage from './pages/AdminPage'
import PrivateRoute from './components/PrivateRoute'
import AuthRoute from './components/AuthRoute'
import Navbar from './components/NavBar'

function App() {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    userRole: null
  })

  return (
    <div className="App">
      <Navbar authState={authState} setAuthState={setAuthState} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={
          <AuthRoute isAuthenticated={authState.isAuthenticated}>
            <LoginPage setAuthState={setAuthState} />
          </AuthRoute>
        } />
        <Route path="/register" element={
          <AuthRoute isAuthenticated={authState.isAuthenticated}>
            <RegisterPage />
          </AuthRoute>
        } />
        <Route path="/profile" element={
          <PrivateRoute isAuthenticated={authState.isAuthenticated}>
            <ProfilePage />
          </PrivateRoute>
        } />
        <Route path="/admin" element={
          <PrivateRoute
            isAuthenticated={authState.isAuthenticated}
            requiredRole="ROLE_ADMIN"
            userRole={authState.userRole}
          >
            <AdminPage />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  )
}

export default App