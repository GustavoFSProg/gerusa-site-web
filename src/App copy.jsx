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

        <ContainerImagens>
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
          Sou Gerusa A. Sohne Gamm. Sou tradutora de alemão e inglês. Trabalho há mais de 10 anos
          como tradutora. Sou formada en letras na UFRGS com mestrado em germanística na
          universidade de Bonn na Alemanha. Morei 6 anos na Alemanha. Tanbém comecei a estudar a
          língua inglesa, e trabalhar como tradutora de inglês.
        </ContainerText>
        <ContainerCards>
          <Cards>
            <ImagemCardA src={card1} alt="alt" />
            <h2 style={{ fontSize: '29px', marginTop: '10px' }}>Traduções</h2>
            <hr style={{ width: '88%', marginTop: '-15px', marginLeft: '5px' }} />
            <div style={{ width: '85%', textIndent: '6px', marginTop: '10px', color: '#595959' }}>
              Sou Gerusa A. Sohne Gamm. Sou tradutora de alemão e inglês. Trabalho há mais de 10
              anos como tradutora. Sou formada en letras na UFRGS com mestrado em germanística na
              universidade de Bonn na Alemanha. Morei 6 anos na Alemanha.
            </div>
          </Cards>

          <Cards>
            <ImagemCardB src={card2} alt="alt" />
            <h2 style={{ fontSize: '29px', marginTop: '10px' }}>Sobre a Profissional</h2>
            <hr style={{ width: '88%', marginTop: '-15px', marginLeft: '5px' }} />
            <div style={{ width: '85%', textIndent: '6px', marginTop: '10px', color: '#595959' }}>
              Sou Gerusa A. Sohne Gamm. Sou tradutora de alemão e inglês. Trabalho há mais de 10
              anos como tradutora. Sou formada en letras na UFRGS com mestrado em germanística na
              universidade de Bonn na Alemanha. Morei 6 anos na Alemanha.
            </div>
          </Cards>
          <Cards>
            <ImagemCardTres src={card3} alt="alt" />
            <h2 style={{ fontSize: '29px', marginTop: '10px' }}>Serviços</h2>
            <hr style={{ width: '88%', marginTop: '-15px', marginLeft: '5px' }} />
            <div style={{ width: '85%', textIndent: '6px', marginTop: '10px', color: '#595959' }}>
              Sou Gerusa A. Sohne Gamm. Sou tradutora de alemão e inglês. Trabalho há mais de 10
              anos como tradutora. Sou formada en letras na UFRGS com mestrado em germanística na
              universidade de Bonn na Alemanha. Morei 6 anos na Alemanha.
            </div>
          </Cards>
        </ContainerCards>

        <Footer />
      </Container>
    </>
  )
}

export default App
