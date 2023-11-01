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
        <HeaderTop />
        <HeaderComponent />
        {isButtonClicked === 'none' ? (
          <Menu>
            <button
              onMouseLeave={() => handleDismissButtonClicked()}
              type="button"
              onClick={() => handleOpenButtonClicked()}
            >
              LINKS
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
              LINKS
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
              opacity: '0.6'
            }}
            onClick={() => handleOpenButtonClicked()}
            onMouseLeave={() => handleDismissButtonClicked()}
          >
            <MenuMobile />
          </div>
        ) : null}

        <ContainerImagens style={{ zIndex: '-10' }}>
          <ImgSlide
            src={slide}
            alt="slide"
            style={{
              marginTop: '5px',
              height: '315px',

              zIndex: '-10'
            }}
          />

          <ImgSlideDois
            src={bandeira}
            alt="slide"
            style={{
              marginTop: '5px',
              height: '317px',

              zIndex: '-10'
            }}
          />
        </ContainerImagens>

        <ContainerH1>
          Bem vindos, conheçam meu trabalho!
          <Hr />
        </ContainerH1>

        <WhatsContainer>
          <a href="https://wa.me/5551993965345">
            <Imagem src={whats} alt="whatsapp" />
          </a>
        </WhatsContainer>

        <ContainerText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim convallis
          augue vitae condimentum. Maecenas aliquam fermentum pulvinar. Pellentesque eu ullamcorper
          enim. Quisque aliquam finibus sem, vel mollis sapien vestibulum gravida. Morbi aliquet
          purus vel tellus viverra, pharetra tincidunt sem eleifend. Aenean ac nibh suscipit,
          suscipit magna in, sagittis neque. Duis at auctor augue. Etiam suscipit ligula a orci
          convallis mattis. Etiam velit tellus, condimentum efficitur dui a, gravida porttitor
          ligula. Etiam placerat lacus nec commodo rhoncus. Aliquam ex enim, aliquet quis magna id,
          dapibus semper dui. Donec nec metus feugiat, eleifend ligula in, dapibus neque.
        </ContainerText>
        <ContainerCards>
          <Cards>
            <ImagemCardA src={card1} alt="alt" />
            <h2 style={{ fontSize: '29px', marginTop: '10px' }}>Traduções</h2>
            <hr style={{ width: '88%', marginTop: '-15px', marginLeft: '5px' }} />
            <div style={{ width: '85%', textIndent: '6px', marginTop: '10px', color: '#595959' }}>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
            </div>
          </Cards>

          <Cards>
            <ImagemCardB src={card2} alt="alt" />
            <h2 style={{ fontSize: '29px', marginTop: '10px' }}>Sobre a Profissional</h2>
            <hr style={{ width: '88%', marginTop: '-15px', marginLeft: '5px' }} />
            <div style={{ width: '85%', textIndent: '6px', marginTop: '10px', color: '#595959' }}>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
            </div>
          </Cards>
          <Cards>
            <ImagemCardTres src={card3} alt="alt" />
            <h2 style={{ fontSize: '29px', marginTop: '10px' }}>Serviços</h2>
            <hr style={{ width: '88%', marginTop: '-15px', marginLeft: '5px' }} />
            <div style={{ width: '85%', textIndent: '6px', marginTop: '10px', color: '#595959' }}>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
            </div>
          </Cards>
        </ContainerCards>

        <Footer />
      </Container>
    </>
  )
}

export default App
