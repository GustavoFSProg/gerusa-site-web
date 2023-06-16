import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import styled from 'styled-components'
import api from '../../api'
import HeaderComponent from '../../components/Header/Header'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 500px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
      {dados === 'OK' ? <h1>DASHBOARD</h1> : <h1>ACESSO PROIBIDO!!!</h1>}
    </Container>
  )
}

export default Dashboard
