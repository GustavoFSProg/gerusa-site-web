import { useState } from 'react'
import viteLogo from '/vite.svg'
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import HeaderComponent from '../../components/Header/Header'
import {
  Container,
  ContainerTextImage,
  ContainerTextAll,
  ContainerFooter,
  ImagemCard,
  ImgSlideDois,
  ContainerCards,
  Cards,
  ContainerText,
  ContainerH1,
  Hr,
  ImgSlide,
  Menu,
  ContainerImagens,
  DivFooter
} from './style-app'
import slide from '../../assets/building.jpg'
import rosto from '../../assets/rosto.jpg'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

function Traduction() {
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
        {/* <HeaderTop /> */}
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
              height: '250px',
              marginTop: '-75px',
              zIndex: '999',
              background: 'lightgray',
              flexDirection: 'column',
              fontSize: '17px',
              paddingTop: '25px',
              paddingBottom: '25px',
              opacity: '0.6',
            }}
            onClick={() => handleOpenButtonClicked()}
            onMouseLeave={() => handleDismissButtonClicked()}
          >
            <span style={{ marginBottom: '10px', cursor: 'pointer' }}>
              <Link to="/" style={{ color: '#213547' }}>
                <span style={{ color: '#213547' }} >
                  HOME
                </span>
              </Link>
            </span>

            <span style={{ marginBottom: '10px', cursor: 'pointer' }}>

              <Link to="/somos" style={{ color: '#213547' }}>

                <span style={{ color: '#213547' }}>
                  QUEM SOU
                </span>
              </Link>
            </span>

            <span style={{ marginBottom: '10px', cursor: 'pointer' }}>
              <Link to="/traduction" style={{ color: '#213547' }}>

                <span style={{ color: '#213547' }}>
                  SERVIÇO DE TRADUÇÃO
                </span>
              </Link>
            </span>

          </div>
        ) : null}

        <ContainerTextAll>
          <ContainerH1>
            Serviço de  Tradução
            <Hr />
          </ContainerH1>
          <ContainerTextImage>

            <ContainerText>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here, It is
              a long established fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here, normal
              distribution of letters, It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, normal distribution of letters,

            </ContainerText>
          </ContainerTextImage>
        </ContainerTextAll>


        <DivFooter >

          <Footer />
        </DivFooter>
      </Container>
    </>
  )
}

export default Traduction
