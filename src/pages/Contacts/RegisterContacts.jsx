import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import styled from 'styled-components'
import api from '../../api'

import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Buttons/styled-button'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: top;
  flex-direction: column;
  /* background: orange; */
`


export const H1 = styled.h1`
  display: flex;
  align-items: center;
  font-size: 50px;



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

  @media screen and (max-width: 850px) {
    display: flex;
  /* width: 30%; */
  height: auto;
  align-items: center;
  justify-content: center;
    
    width: 110%;
  }
`

function RegisterContacts() {
  const [dados, setDados] = useState([])
  const [able, setAble] = useState(false)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [message, setMessage] = useState('')


  const navigate = useNavigate()

  // const token = localStorage.getItem('token')

  // async function HandlePosts() {
  //   const { data } = await api.get('/get-all-contacts')

  //   setDados(data.data)

  //   console.log(dados)

  //   return <p></p>
  // }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      // console.log(`Token:${token}`)

      // if (!token) return alert('Token Inválido, efetue o Login novamente!!')

      const data = {
        nome,
        email,
        telefone,
        message,
      }

      await api.post('/register-contacts', data)

      navigate('/')

      return alert('Cadastro realizado com sucesso!')
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
      <H1>ENTRE EM CONTATO CONOSCO</H1>

      <br />
      {/* {dados === 'OK' ? null : <h1>ACESSO PROIBIDO!!!</h1>} */}
      <br />
      <Form onSubmit={handleSubmit}>
        <br />

        <Input
          placeholder="Nome"
          invalid={true}
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <Input
          placeholder="Email"
          invalid={true}
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <Input
          placeholder="Telefone"
          invalid={true}
          id="telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <br />
        Mensagem:
        <TextArea
          rows="22"
          cols="58"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <br />
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  )
}

export default RegisterContacts
