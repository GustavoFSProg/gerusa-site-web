import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderTop from './components/HeaderTop/HeaderTop'
import HeaderComponent from './components/Header/Header'
import { Container, ImgSlide, Menu } from './style-app'
import slide from './assets/slide-1.jpg'

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
            </button>{' '}
            :{' '}
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
              marginTop: '220px',
              zIndex: '999',
              background: 'lightgray',
              flexDirection: 'column',
              fontSize: '20px',
              paddingTop: '25px',
              paddingBottom: '25px',
            }}
          >

            <span>
              HOME
            </span>

            <span>
              QUEM SOMOS
            </span>

            <span>
              AREAS DE ATUAÇAO
            </span>

            <span >
              SERVIÇOS DE TRADUÇÃO
            </span>

            <span >
              BLOG
            </span>


            <span >
              CLIENTES
            </span>


            <span >
              CONTATO
            </span>
          </div>
        ) : null}


        <ImgSlide src={slide} alt="slide" style={{

          zIndex: '-10',
        }} />
      </Container>
    </>
  )
}

export default App
