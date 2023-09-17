import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import styled from 'styled-components'
import api from '../../api'
import { useNavigate } from 'react-router-dom'
import HeaderComponent from '../../components/Header/Header'
import { Button } from '../../components/Buttons/styled-button'
import MenuMobile from '../../components/MenuMobile/MenuMobile'
import { Menu } from '../../style-app'
import { userContext } from '../../userContext'
import { useContext } from 'react'

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

  @media screen and (max-width: 850px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -26px;
  }
`

export const Form = styled.form`
  display: flex;
  width: 30%;
  height: 350px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 850px) {
    width: 70%;
  }
`

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isButtonClicked, setIsButtonClicked] = useState('none')

  const { user, setUser } = useContext(userContext)

  console.log(user)

  function handleDismissButtonClicked() {
    setIsButtonClicked('none')
  }

  function handleOpenButtonClicked() {
    setIsButtonClicked('flex')
  }

  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const { data } = await api.post('/login', { email, password })

      sessionStorage.setItem('token', data.token)
      sessionStorage.setItem('userId', data.user.id)
      sessionStorage.setItem('userName', data.user.name)

      setUser(true)
      // console.log(user)

      navigate('/dashboard')

      return alert('Login  realizado com sucesso!')
    } catch (error) {
      return alert(`Erro no Login ${error}`)
    }
  }

  function CheckUserLogged() {
    if (user === true) {
      navigate('/dashboard')

      // console.log(user)
    } else {
      navigate('/login')
    }
  }

  useEffect(() => {
    CheckUserLogged()
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
      <h1>LOGIN</h1>
      <ContainerInput>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            invalid={true}
          // errorMessage="Email inválido"
          />
          <div style={{ marginTop: '-41px', width: '100%' }}>
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              invalid={false}
              errorMessage="Invalid password"
            />
          </div>

          <Button type="submit">Login</Button>
        </Form>
      </ContainerInput>
    </Container>
  )
}

export default Login
