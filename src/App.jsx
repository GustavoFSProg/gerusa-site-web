import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderTop from './components/HeaderTop/HeaderTop'
import HeaderComponent from './components/Header/Header'
import { Container, ImagemCardTres, ContainerFooter, ImagemCard, ImgSlideDois, ContainerCards, Cards, ContainerText, ContainerH1, Hr, ImgSlide, Menu, ContainerImagens } from './style-app'
import slide from './assets/building.jpg'
import bandeira from './assets/bandeira.jpeg'
import card1 from './assets/thebandeira.jpg'
import card2 from './assets/peopple.jpg'
import card3 from './assets/building.jpg'

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
            <span style={{ marginBottom: '10px', cursor: 'pointer' }}>HOME</span>

            <span style={{ marginBottom: '10px', cursor: 'pointer' }}>QUEM SOMOS</span>

            <span style={{ marginBottom: '10px', cursor: 'pointer' }}>AREAS DE ATUAÇAO</span>

            <span style={{ marginBottom: '10px', cursor: 'pointer' }}>SERVIÇOS DE TRADUÇÃO</span>

            <span style={{ marginBottom: '10px', cursor: 'pointer' }}>BLOG</span>

            <span style={{ marginBottom: '10px', cursor: 'pointer' }}>CLIENTES</span>

            <span style={{ marginBottom: '10px', cursor: 'pointer' }}>CONTATO</span>
          </div>
        ) : null}

        <ContainerImagens style={{ zIndex: '-10' }}>
          <ImgSlide
            src={slide}
            alt="slide"
            style={{
              marginTop: '5px',
              height: '315px',

              zIndex: '-10',
            }}
          />

          <ImgSlideDois
            src={bandeira}
            alt="slide"
            style={{
              marginTop: '5px',
              height: '317px',

              zIndex: '-10',
            }}
          />
        </ContainerImagens>
        <ContainerH1>
          Bem vindos, conheçam meu trabalho!
          <Hr />
        </ContainerH1>

        <ContainerText>
          It is a long established fact that a reader will be
          distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is
          that it has a more-or-less normal distribution of letters,
          as opposed to using 'Content here,
          It is a long established fact that a reader will be
          distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is
          that it has a more-or-less normal distribution of letters,
          as opposed to using 'Content here,
          normal distribution of letters,
        </ContainerText>

        <ContainerCards>
          <Cards>
            <ImagemCard src={card1} alt="alt" />
            <h2 style={{ fontSize: '29px', marginTop: '10px' }}>Traduções</h2>
            <hr style={{ width: '88%', marginTop: '-15px', marginLeft: '5px' }} />
            <div style={{ width: '85%', textIndent: '6px', marginTop: '10px', color: '#595959' }}>

              It is a long established fact that a reader will be
              distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters,
              as opposed to using 'Content here,
            </div>
          </ Cards>

          <Cards>
            <ImagemCard src={card2} alt="alt" />
            <h2 style={{ fontSize: '29px', marginTop: '10px' }}>Sobre a Profissional</h2>
            <hr style={{ width: '88%', marginTop: '-15px', marginLeft: '5px' }} />
            <div style={{ width: '85%', textIndent: '6px', marginTop: '10px', color: '#595959' }}>

              It is a long established fact that a reader will be
              distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters,
              as opposed to using 'Content here,
            </div>
          </ Cards>
          <Cards>
            <ImagemCardTres src={card3} alt="alt" />
            <h2 style={{ fontSize: '29px', marginTop: '10px' }}>Serviços</h2>
            <hr style={{ width: '88%', marginTop: '-15px', marginLeft: '5px' }} />
            <div style={{ width: '85%', textIndent: '6px', marginTop: '10px', color: '#595959' }}>
              It is a long established fact that a reader will be
              distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters,
              as opposed to using 'Content here,
            </div>
          </ Cards>
        </ ContainerCards>

        <ContainerFooter>
          <div style={{ width: '85%', textIndent: '6px', marginTop: '10px', color: 'white' }}>
            <h1 style={{
              width: '85%',
              marginTop: '10px', color: 'white', fontSize: '22px'
            }}>
              Quem Somos
            </h1>
            <hr style={{
              width: '88%', marginTop: '-2px', marginLeft: '45px',
              color: 'white'
            }} />


            <div style={{ width: '100%', marginLeft: '28px', marginTop: '20px', color: 'white' }}>

              It is a long established fact that a reader will be
              distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters,
              as opposed to using 'Content here,
            </div>
          </div>
          <div style={{ width: '90%', textIndent: '6px', marginTop: '10px', color: 'white' }}>
            <h1 style={{
              width: '85%',
              marginTop: '10px', color: 'white', fontSize: '22px',
              marginLeft: '10px'
            }}>
              Tradutora Certificada
            </h1>
            <hr style={{
              width: '88%', marginTop: '-2px', marginLeft: '18px',
              color: 'white'
            }} />

            <div style={{
              width: '100%', textIndent: '6px', marginTop: '10px',
              color: 'white'
            }}>
              It is a long established fact that a reader will be
              distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters,
              as opposed to using 'Content here,
            </div>
          </div>

          <div style={{
            width: '85%', textIndent: '6px', marginTop: '10px',
            color: 'white'
          }}>
            <h1 style={{
              width: '65%',
              marginTop: '10px', color: 'white', fontSize: '22px',
              marginLeft: '-6px'

            }}>
              Localização
            </h1>
            <hr style={{
              width: '88%', marginTop: '-2px', marginLeft: '18px',
              color: 'white'
            }} />

            <div style={{ width: '100%', textIndent: '6px', marginTop: '10px', color: 'white' }}>
              It is a long established fact that a reader will be
              distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters,
              as opposed to using 'Content here,
            </div>
          </div>
          <div style={{
            width: '85%', textIndent: '6px', marginTop: '10px',
            color: 'white'
          }}>
            <h1 style={{
              width: '65%',
              marginTop: '10px', color: 'white', fontSize: '22px',
              marginLeft: '-17px'

            }}>
              Contatos
            </h1>
            <hr style={{
              width: '88%', marginTop: '-2px', marginLeft: '18px',
              color: 'white'
            }} />

            <div style={{ width: '100%', textIndent: '6px', marginTop: '10px', color: 'white' }}>
              It is a long established fact that a reader will be
              distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters,
              as opposed to using 'Content here,
            </div>
          </div>
        </ ContainerFooter>
      </Container>
    </>
  )
}

export default App
