import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Login from './pages/Login/login'

function Routeres() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" exact element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routeres