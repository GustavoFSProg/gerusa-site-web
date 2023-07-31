import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import styled from 'styled-components'
import api from '../../api'
import HeaderComponent from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import { Menu } from '../../style-app'
import MenuMobile from '../../components/MenuMobile/MenuMobile'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 20rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background: orange; */
  margin-top: 400px;

  @media screen and (max-width: 800px){
  margin-top: -20px;
  


  }

`


export const ContainerLinks = styled.div`
  display: flex;
  width: 90vw;
  height: 90px;
  align-items: center;
  justify-content: space-around;
  background: green;
  margin-top: -650px;
  margin-bottom: 200px;

  @media screen and (max-width: 800px){
  margin-top: 30px;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 30px;
  justify-content: space-between;
  height: auto;
  font-size: 20px;


  }
`

export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  height: 350px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

function Dashboard() {
  const [dados, setDados] = useState()

  const [isButtonClicked, setIsButtonClicked] = useState('none')

  function handleDismissButtonClicked() {
    setIsButtonClicked('none')
  }

  function handleOpenButtonClicked() {
    setIsButtonClicked('flex')
  }

  const token = localStorage.getItem('token')

  async function HandleAuth() {
    const { data } = await api.post('/auth', token)


    if (data) {
      setDados('OK')
    }


    return dados
  }

  useEffect(() => {
    HandleAuth()
  }, [])

  return (
    <>
      <HeaderComponent />
      <Container>
        {isButtonClicked === 'none' ? (
          <Menu >
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
          <Menu style={{ display: 'none', }}>
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
              marginTop: '75px',
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
            <MenuMobile />
          </div>
        ) : null}
        <ContainerLinks>
          <Link to="/dashboard" style={{
            color: 'yellow', marginBottom: '9px'
            , fontSize: '18px'
          }}>
            PAINEL
          </Link>

          <Link to="/contacts" style={{
            color: 'yellow'
            , marginBottom: '9px'
            , fontSize: '18px'
          }}>
            CONTATOS
          </Link>

          <Link to="/posts" style={{
            color: 'yellow'
            , marginBottom: '9px'
            , fontSize: '18px'
          }}>
            POSTS
          </Link>
          <Link to="/posts" style={{
            color: 'yellow'
            , marginBottom: '9px'
            , fontSize: '18px'
          }}>
            USUÁRIOS
          </Link>
        </ ContainerLinks>
        {dados === 'OK' ? <h1>PAINEL</h1> : <h1>ACESSO PROIBIDO!!!</h1>}
      </Container >
    </>
  )
}

export default Dashboard
