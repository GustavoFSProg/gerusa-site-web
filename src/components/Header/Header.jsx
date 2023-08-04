import { useState } from 'react'
import { Container, Header, ContainerLinks } from './style'
import Logo from '../../assets/thebandeira.jpg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ContainerLogo = styled.div` 
 display: flex;
 font-size: 37px;
 justify-content: center;
  align-items: center;
  align-self: center;
 margin-left: 40px;

 @media screen and (max-width: 1200px){
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
 margin-left: -30px;



 }
`

function HeaderComponent() {
  return (
    <>
      <Container>
        <Header>
          <ContainerLogo >
            <img
              src={Logo}
              alt="fone"
              width="170"
              height="100"
              style={{ borderRadius: '10px', marginBottom: '10px', zIndex: '-100' }}
            />

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
