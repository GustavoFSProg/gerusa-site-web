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

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  height: 100rem;
  align-items: center;
  justify-content: space-around;
  background: green;
  margin-bottom: 60px;
  padding-top: 28px;
  padding-bottom: 28px;

  @media screen and (max-width: 800px) {
    margin-top: 30px;
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 30px;
    justify-content: center;
  align-items: center;

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
 z-index: 9999;
 width: 88%;
    
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

function RegisterContacts() {
  const [dados, setDados] = useState([])
  const [able, setAble] = useState(false)


  const [isButtonClicked, setIsButtonClicked] = useState('none')

  function handleDismissButtonClicked() {
    setIsButtonClicked('none')
  }

  function handleOpenButtonClicked() {
    setIsButtonClicked('flex')
  }

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [message, setMessage] = useState('')


  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()

    try {

      const data = {
        nome,
        email,
        telefone,
        message,
      }

      await api.post('/register-contacts', data)

      navigate('/')

      return alert('Mensagem enviada com sucesso!')
    } catch (error) {
      return alert(error)
    }
  }

  function handleAbled() {
    setAble(true)
    return
  }

  async function HandleAuth() {
    const { data } = await api.post('/auth', token)

    if (data) {
      setDados('OK')
    }

    return dados
  }

  useEffect(() => {
    HandleAuth()
    // HandleContacts()
  }, [])

  return (
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
            opacity: '0.6',
          }}
          onClick={() => handleOpenButtonClicked()}
          onMouseLeave={() => handleDismissButtonClicked()}
        >
          <MenuMobile />

        </div>
      ) : null}

      <H1>ENTRE EM CONTATO CONOSCO</H1>

      <br />
      <br />
      <Form onSubmit={handleSubmit} style={{ marginLeft: '-24px' }}>
        <div style={{ marginTop: '-20px', width: '100%' }}>

          <Input
            placeholder="Nome"
            invalid={true}
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </ div>
        <div style={{ marginTop: '-40px', width: '100%' }}>
          <Input
            placeholder="Email"
            invalid={true}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </ div>

        <div style={{ marginTop: '-40px', width: '100%' }}>

          <Input
            placeholder="Telefone"
            invalid={true}
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </ div>

        <div style={{ marginTop: '-22px', }}>
          <TextArea
            placeholder="Mensagem"
            rows="12"
            cols="42"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

        </ div>

        <Button style={{ marginTop: '27px', marginBottom: '70px' }} type="submit">Enviar</Button>
      </Form>
      <LinkMobileEmail
        target="_blank"
        href="mailto:gerusagamm@gmail.com?subject=Olá&body=Olá, Bom dia"
      >
        Ou clicando: gerusagamm@gmail.com
      </LinkMobileEmail>

      <br />

      <LinkDeskTopEmail
        target="_blank"
        href="http://mailto:gerusagamm@gmail.com"
      >
        Ou clicando: gerusagamm@gmail.com
      </LinkDeskTopEmail>

      <DivFooter >

        <Footer />
      </DivFooter>
    </Container>
  )
}

export default RegisterContacts
