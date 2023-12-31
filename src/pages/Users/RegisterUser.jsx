import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import styled from 'styled-components'
import api from '../../api'

import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Buttons/styled-button'
import HeaderComponent from '../../components/Header/Header'
import MenuMobile from '../../components/MenuMobile/MenuMobile'
import { Menu } from '../../style-app'
import Footer from '../../components/Footer/Footer'
// import Mail from '../../assets/gmail.png'
import MailOutline from '@material-ui/icons/MailOutline'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 70px;
`


export const H1 = styled.h1`
  display: flex;
  align-items: center;
  font-size: 30px;



  @media screen and (max-width: 800px) {
    font-size: 22px;
  
  }

`

export const ContainerLinks = styled.div`
  display: flex;
  width: 90vw;
  height: 80px;
  align-items: center;
  justify-content: space-around;
  background: green;
  margin-top: 600px;
  margin-bottom: 57px;

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
export const Form = styled.form`
  display: flex;
  width: 30%;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 850px) {
    width: 70%;
  }
`

export const TextArea = styled.textarea`
  border-radius: 8px;
  border: 1px solid rgba(37, 0, 50, 0.25);
  box-shadow: 0px 0px 5px 1px rgba(37, 0, 50, 0.25);
  font-family: 'Roboto';
  font-size: 1rem;
  margin-left: 41px;
  padding: 14px 14px;

  @media screen and (max-width: 850px) {
    display: flex;
  height: auto;
  align-items: center;
  justify-content: center;
  margin-left: 0px;

    
    width: 100%;
  }
`

export const DivFooter = styled.div` 
 margin-top: 190px;
 width: 100%;


 @media screen and (max-width: 800px) {
  margin-top: -60px;
  }
`

export const LinkMobileEmail = styled.a` 
 display:none;
 

 @media screen and (max-width: 800px) {
  font-size: 20px;
  color: #008080;
 display:flex;
 align-items: center;
 justify-content: center;
 z-index: 9999;
 width: 88%;
    
  }
`


export const SpanClick = styled.span` 
 display:none;
 

 @media screen and (max-width: 800px) {
  font-size: 20px;
  color: #008080;
 display:flex;
 align-items: center;
 justify-content: center;
 z-index: 9999;
 width: 88%;
 margin-bottom: 11px;
    
  }
`

export const LinkDeskTopEmail = styled.a` 
 display:flex;
 font-size: 22px;
 color: #008080;



 @media screen and (max-width: 800px) {
 display:none;
    
  }
`

function RegisterUser() {
  const [dados, setDados] = useState([])
  const [able, setAble] = useState(false)

  const token = sessionStorage.getItem('token')


  const [isButtonClicked, setIsButtonClicked] = useState('none')

  function handleDismissButtonClicked() {
    setIsButtonClicked('none')
  }

  function handleOpenButtonClicked() {
    setIsButtonClicked('flex')
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()

    try {

      const data = {
        name,
        email,
        password,
      }

      await api.post('/register-users', data)

      navigate('/login')

      return alert('Usuiario Admim cadastrado com sucesso!')
    } catch (error) {
      return alert(error)
    }
  }

  function handleAbled() {
    setAble(true)
    return
  }

  // async function HandleAuth() {
  //   const { data } = await api.post('/auth', token)

  //   if (data) {
  //     setDados('OK')
  //   }

  //   return dados
  // }

  // useEffect(() => {
  //   HandleAuth()
  //   // HandleContacts()
  // }, [])

  return (
    <Container>
      {/* <HeaderComponent /> */}
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

        <Link to="/register-user" style={{
          color: 'yellow'
          , marginBottom: '9px'
          , fontSize: '18px'
        }}>
          CADASTRAR USUÁRIO
        </Link>

        <Link to="/main-update" style={{
          color: 'yellow'
          , marginBottom: '9px'
          , fontSize: '18px'
        }}>
          MUDAR A SENHA
        </Link>
        <Link to="/posts" style={{
          color: 'yellow'
          , marginBottom: '9px'
          , fontSize: '18px'
        }}>
          USUÁRIOS
        </Link>
      </ ContainerLinks>

      <H1>CADASTRO DO USUÁRIO</H1>

      <br />
      <br />
      <Form onSubmit={handleSubmit} style={{ marginLeft: '-24px' }}>
        <div style={{ marginTop: '-20px', width: '100%' }}>

          <Input
            placeholder="Nome"
            invalid={true}
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </ div>
        <div style={{ marginTop: '-40px', width: '100%' }}>
          <Input
            placeholder="Email"
            invalid={true}
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </ div>

        <div style={{ marginTop: '-40px', width: '100%' }}>

          <Input
            placeholder="Senha"
            invalid={true}
            id="password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </ div>


        <Button style={{ marginTop: '27px', marginBottom: '70px' }} type="submit">Enviar</Button>
      </Form>

      <br />



      <DivFooter >

        <Footer />
      </DivFooter>
    </Container>
  )
}

export default RegisterUser
