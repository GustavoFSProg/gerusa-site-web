import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderTop from './components/HeaderTop/HeaderTop'
import HeaderComponent from './components/Header/Header'
import { Container, ContainerH1, Hr, ImgSlide, Menu, ContainerImagens } from './style-app'
import slide from './assets/slide-1.jpg'
import bandeira from './assets/bandeira.jpeg'

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
        <HeaderTop />
        <HeaderComponent />
        {isButtonClicked === 'none' ? (
          <Menu>
            <button
              onMouseLeave={() => handleDismissButtonClicked()}
              type="button"
              onClick={() => handleOpenButtonClicked()}
            >
              MENU
            </button>

            <button
              onMouseLeave={() => handleDismissButtonClicked()}
              type="button"
              // onClick={() => handleOpenButtonClicked()}
              style={{ display: 'none' }}
            ></button>
          </Menu>
        ) : (
          <Menu style={{ display: 'none' }}>
            <button
              onMouseLeave={() => handleDismissButtonClicked()}
              type="button"
              onClick={() => handleOpenButtonClicked()}
              style={{ display: 'none' }}
            >
              MENU
            </button>
          </Menu>
        )}
        {isButtonClicked === 'flex' ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              height: '750px',
              marginTop: '-75px',
              zIndex: '999',
              background: 'lightgray',
              flexDirection: 'column',
              fontSize: '17px',
              paddingTop: '25px',
              paddingBottom: '25px',
              opacity: '0.6'
            }}
            onClick={() => handleOpenButtonClicked()}
            onMouseLeave={() => handleDismissButtonClicked()}
          >

            <span style={{ marginBottom: '10px', cursor: 'pointer' }}>
              HOME
            </span>

            <span style={{ marginBottom: '10px', cursor: 'pointer' }}>
              QUEM SOMOS
            </span>

            <span style={{ marginBottom: '10px', cursor: 'pointer' }}>
              AREAS DE ATUAÇAO
            </span>

            <span style={{ marginBottom: '10px', cursor: 'pointer' }}>
              SERVIÇOS DE TRADUÇÃO
            </span>

            <span style={{ marginBottom: '10px', cursor: 'pointer' }}>
              BLOG
            </span>


            <span style={{ marginBottom: '10px', cursor: 'pointer' }}>
              CLIENTES
            </span>


            <span style={{ marginBottom: '10px', cursor: 'pointer' }}>
              CONTATO
            </span>
          </div>
        ) : null}

        <ContainerImagens style={{ zIndex: '-10', }}>

          <ImgSlide src={slide} alt="slide" style={{
            marginTop: '5px',

            zIndex: '-10',
          }} />

          <ImgSlide src={bandeira} alt="slide" style={{
            marginTop: '5px',
            height: "317px",

            zIndex: '-10',
          }} />

        </ ContainerImagens >
        < ContainerH1 >
          Bem vindos, conheçam meu trabalho!

          <Hr style={{}} />
        </ ContainerH1 >



      </Container>
    </>
  )
}

export default App
