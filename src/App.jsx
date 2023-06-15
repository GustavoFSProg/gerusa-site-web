import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderTop from './components/HeaderTop/HeaderTop'
import HeaderComponent from './components/Header/Header'
import { Container } from './style-app'

function App() {

  return (
    <>
      <Container>
        <HeaderTop />
        <HeaderComponent />
        HOME
      </Container>

    </>
  )
}

export default App
