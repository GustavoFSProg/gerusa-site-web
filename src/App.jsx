import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderTop from './components/HeaderTop/HeaderTop'
import HeaderComponent from './components/Header/Header'
import { Container, ImgSlide, Menu } from './style-app'
import slide from './assets/slide-1.jpg'

function App() {

  return (
    <>
      <Container>
        <HeaderTop />
        <HeaderComponent />
        <Menu style={{

        }}>
          MENU
        </Menu>
        <ImgSlide src={slide} alt="slide" />



      </Container>

    </>
  )
}

export default App
