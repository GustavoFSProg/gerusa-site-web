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

let msg = ''

function Dashboard() {
  const Token = localStorage.getItem('Token')

  async function HandleAuth() {
    return await api.post('/auth', Token)
  }

  useEffect(() => {
    HandleAuth()
  }, [])

  return (
    <Container>
      <HeaderComponent />
      {Token ? <h1>DASHBOARD</h1> : <h1>ACESSO PROIBIDO!!!</h1>}
    </Container>
  )
}

export default Dashboard
