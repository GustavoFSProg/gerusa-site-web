import { useState } from 'react'
import { Container, Header, ContainerLinks } from './style'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function HeaderComponent() {

  return (
    <>
      <Container>
        <Header >
          <img src={Logo} alt="fone" width="200" height='200'
            style={{ borderRadius: '50px', marginBottom: '10px', zIndex: '-100' }}
          />
          <ContainerLinks>
            <Link to="/">
              <span >
                HOME
              </span>
            </Link>
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

            <Link to="/login">
              <span >
                ADMIN
              </span>
            </Link>


          </ ContainerLinks>
        </Header >
      </Container>

    </>
  )
}

export default HeaderComponent
