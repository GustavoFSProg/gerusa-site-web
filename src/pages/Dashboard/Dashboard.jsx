import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import styled from 'styled-components'
import api from '../../api'
import HeaderComponent from '../../components/Header/Header'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: top;
  flex-direction: column;
  /* background: orange; */

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
    <Container>
      <HeaderComponent />
      <ContainerLinks>
        <Link to="/dashboard" style={{ color: 'yellow' }}>
          PAINEL
        </Link>

        <Link to="/contacts" style={{ color: 'yellow' }}>
          CONTATOS
        </Link>

        <Link to="/posts" style={{ color: 'yellow' }}>
          POSTS
        </Link>
        <Link to="/posts" style={{ color: 'yellow' }}>
          USUÁRIOS
        </Link>
      </ ContainerLinks>
      {dados === 'OK' ? <h1>PAINEL</h1> : <h1>ACESSO PROIBIDO!!!</h1>}
    </Container >
  )
}

export default Dashboard
