import { useState } from 'react'
import { Container, Header, ContainerLinks } from './style'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ContainerLogo = styled.div` 
 display: flex;
 font-size: 37px;
 justify-content: center;
  align-items: center;
  align-self: center;
 margin-left: 80px;

 @media screen and (max-width: 1200px){
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
 margin-left: 0px;



 }
`

function HeaderComponent() {
  return (
    <>
      <Container>
        <Header>

          {/* <img
            src=""
            alt="fone"
            width="200"
            height="200"
            style={{ borderRadius: '50px', marginBottom: '10px', zIndex: '-100' }}
          /> */}
          <ContainerLogo >
            LOGO
          </ContainerLogo>
          <ContainerLinks>
            <Link to="/" style={{ color: '#213547' }}>
              <span style={{ color: '#213547' }}>HOME</span>
            </Link>
            <Link to="/somos" style={{ color: '#213547' }}>
              <span style={{ color: '#213547' }}>QUEM SOU</span>
            </Link>

            <Link to="/traduction" style={{ color: '#213547' }}>
              <span style={{ color: '#213547' }}>SERVIÇO DE TRADUÇÃO</span>
            </Link>

            <Link to="/traduction" style={{ color: '#213547' }}>
              <span style={{ color: '#213547' }}>AREAS DE ATUAÇÃO</span>
            </Link>

            <Link to="/postsList" style={{ color: '#213547' }}>
              <span style={{ color: '#213547' }}>BLOG</span>
            </Link>

            <span>CLIENTES</span>

            <Link to="/register-contacts" style={{ color: '#213547' }}>
              <span style={{ color: '#213547' }}>CONTATO</span>
            </Link>

            <Link to="/login" style={{ color: '#213547' }}>
              <span>ADMIN</span>
            </Link>
          </ContainerLinks>
        </Header>
      </Container>
    </>
  )
}

export default HeaderComponent
