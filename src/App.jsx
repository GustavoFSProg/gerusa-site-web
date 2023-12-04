import { useState } from 'react'
import './App.css'
import HeaderTop from './components/HeaderTop/HeaderTop'
import HeaderComponent from './components/Header/Header'
import {
  Container,
  ImagemCardTres,
  ImagemCardA,
  ImgSlideDois,
  ContainerCards,
  Cards,
  ContainerText,
  ContainerH1,
  Hr,
  ImgSlide,
  ImagemCardB,
  Menu,
  ContainerImagens,
  WhatsContainer,
  Imagem
} from './style-app'
import slide from './assets/bandeiras-2.jpeg'
import bandeira from './assets/foto-england-1.jpg'
import card1 from './assets/foto-england-2.jpg'
import card2 from './assets/bandeira.jpeg'
import card3 from './assets/inglaterra-2.jpg'
import Footer from './components/Footer/Footer'
import MenuMobile from './components/MenuMobile/MenuMobile'
import whats from './assets/canvas.jpeg'

function App() {
  const [isButtonClicked, setIsButtonClicked] = useState('none')

  function handleDismissButtonClicked() {
    setIsButtonClicked('none')
  }

  function handleOpenButtonClicked() {
    setIsButtonClicked('flex')
  }

  return (
    <>
      <Container>
      <h1>
         EM CONSTRUÇÃO
        </h1>
      </Container>
    </>
  )
}

export default App
