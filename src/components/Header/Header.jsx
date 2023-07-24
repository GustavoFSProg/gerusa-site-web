import { useState } from 'react'
import { Container, Header, ContainerLinks } from './style'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function HeaderComponent() {
  return (
    <>
      <Container>
        <Header>
          <img
            src=""
            alt="fone"
            width="200"
            height="200"
            style={{ borderRadius: '50px', marginBottom: '10px', zIndex: '-100' }}
          />
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
