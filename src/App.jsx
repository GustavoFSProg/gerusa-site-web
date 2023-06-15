import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderTop from './components/HeaderTop/HeaderTop'
import HeaderComponent from './components/Header/Header'
import { Container } from './style-app'
import slide from './assets/slide-1.jpg'

function App() {

  return (
    <>
      <Container>
        <HeaderTop />
        <HeaderComponent />
        <div style={{
          display: 'flex', width: '90%',
          height: '250px',
          border: '1px solid black', borderRadius: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          MENU
        </div>
        <img src={slide} alt="slide" style={{ width: '100%', marginBottom: '300px' }} />


        HOME
      </Container>

    </>
  )
}

export default App
