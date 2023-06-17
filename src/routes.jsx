import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Login from './pages/Login/login'
import Dashboard from './pages/Dashboard/Dashboard'
import Contacts from './pages/Contacts/Contacts'

function Routeres() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" exact element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routeres