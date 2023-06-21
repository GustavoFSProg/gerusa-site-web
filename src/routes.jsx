import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Login from './pages/Login/login'
import Dashboard from './pages/Dashboard/Dashboard'
import Contacts from './pages/Contacts/Contacts'
import Posts from './pages/Posts/Posts'
import RegisterPosts from './pages/Posts/RegisterPost'

function Routeres() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" exact element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/register-post" element={<RegisterPosts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routeres