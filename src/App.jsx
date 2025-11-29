import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Dashboard from './Dashboard.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
