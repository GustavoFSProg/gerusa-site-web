import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Login from './pages/Login/login'
import Dashboard from './pages/Dashboard/Dashboard'

function Routeres() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" exact element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routeres