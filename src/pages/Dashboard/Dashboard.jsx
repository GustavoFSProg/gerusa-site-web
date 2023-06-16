import { useState } from 'react'
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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const Token = localStorage.getItem('Token')




  async function handleSubmit(event) {
    event.preventDefault()

    try {
      console.log({ email, password })
      const { data } = await api.post('/login', { email, password })

      console.log(data.token)

      localStorage.setItem('Token', data.token)


      return alert('Login  realizado com sucesso!')
    } catch (error) {
      return alert(`Erro no Login ${error}`)
    }
  }

  return (
    <Container>
      <HeaderComponent />
      {Token ? <h1 >DASHBOARD</h1> : <h1 >ACESSO PROIBIDO!!!</h1>}


    </Container>
  )
}

export default Dashboard
