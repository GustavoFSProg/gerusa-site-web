import { useState } from 'react'
import { Container, Header, ContainerLinks } from './style'
import Logo from '../../assets/iconelogo.jpg'

function HeaderComponent() {

  return (
    <>
      <Container>
        <Header >
          <img src={Logo} alt="fone" width="200" height='150'
          />

          <ContainerLinks>
            <span >
              HOME
            </span>
            <span >
              QUEM SOU
            </span>
            <span >
              AREAS DE ATUAÇÃO
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


          </ ContainerLinks>
        </Header >
      </Container>

    </>
  )
}

export default HeaderComponent
