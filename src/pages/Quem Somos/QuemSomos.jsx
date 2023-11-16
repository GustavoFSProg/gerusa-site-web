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
import rosto from '../../assets/gerusa2.jpg'
import Footer from '../../components/Footer/Footer'
import MenuMobile from '../../components/MenuMobile/MenuMobile'

function QuemSomos() {
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

        <br />

        <ContainerTextAll>
          <ContainerH1>
            Quem Sou
            <Hr />
          </ContainerH1>
          <ContainerTextImage>
            <img
              src={rosto}
              style={{
                display: 'flex',
                width: '220px',
                justifyContent: 'left',
                alignItems: 'flex-start',
                marginTop: '-286px',
                marginRight: '26.5px'
              }}
            />
            <ContainerText>
              Sou Gerusa A. Sohne Gamm. Sou tradutora de alemão e inglês. Trabalho há mais de 10
              anos como tradutora. Sou formada en letras na UFRGS com mestrado em germanística na
              universidade de Bonn na Alemanha. Morei 6 anos na Alemanha. Tanbém comecei a estudar a
              língua inglesa, e trabalhar como tradutora de inglês.
            </ContainerText>
          </ContainerTextImage>
        </ContainerTextAll>

        <DivFooter>
          <Footer />
        </DivFooter>
      </Container>
    </>
  )
}

export default QuemSomos
