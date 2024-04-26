import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App_Construction'
import Login from './pages/Login/login'
import Dashboard from './pages/Dashboard/Dashboard'
import Contacts from './pages/Contacts/Contacts'
import Posts from './pages/Posts/Posts'
import RegisterPosts from './pages/Posts/RegisterPost'
import Profile from './pages/Posts/Profile'
import UpdateComponent from './pages/Posts/UpdateComponent'
import Delete from './pages/Posts/Delete'
import QuemSomos from './pages/Quem Somos/QuemSomos'
import Traduction from './pages/Traduction/Traduction'
import PostsList from './PostsList'
import RegisterContacts from './pages/Contacts/RegisterContacts'
import Users from './pages/Users/Users'
import MainUpdate from './pages/Users/MainUpdate'
import { UserContextProvider } from './userContext'
// import RegisterUser from './pages/Users/RegisterUser'

function Routeres() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register-contacts" element={<RegisterContacts />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/register-post" element={<RegisterPosts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update" element={<UpdateComponent />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/somos" element={<QuemSomos />} />
          <Route path="/traduction" element={<Traduction />} />
          <Route path="/postsList" element={<PostsList />} />
          <Route path="/users" element={<Users />} />
          <Route path="/main-update" element={<MainUpdate />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default Routeres
