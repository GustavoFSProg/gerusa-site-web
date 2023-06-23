import { useState } from 'react'
import { Input } from '../../components/Input'
import styled from 'styled-components'
import api from '../../api'
import { useNavigate } from 'react-router-dom'
import HeaderComponent from '../../components/Header/Header'
import { Button } from '../../components/styled-button'


export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 70vh;
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



// const Button = styled.button`
//   display: flex;
//   /* width: 90vw; */
//   /* height: auto; */
//   align-items: center;
//   justify-content: center;
//   background: gray;
//   margin-bottom: 20px;


// `

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const { data } = await api.post('/login', { email, password })


      localStorage.setItem('token', data.token)
      navigate("/dashboard")


      return alert('Login  realizado com sucesso!')
    } catch (error) {
      return alert(`Erro no Login ${error}`)
    }
  }

  return (
    <Container>
      <HeaderComponent />
      <h1 >LOGIN</h1>
      <ContainerInput>
        <form onSubmit={handleSubmit} style={{ width: '30%' }}>
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            invalid={true}
          // errorMessage="Email inválido"
          />

          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            invalid={false}
            errorMessage="Invalid password"
          />

          <Button type="submit">Login</Button>
        </form>
      </ContainerInput>
    </Container>
  )
}

export default Login
