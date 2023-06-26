import { useEffect, useState } from 'react'
import styled from 'styled-components'
import api from '../../api'
import HeaderComponent from '../../components/Header/Header'
import moment from 'moment'
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

export const ContainerLinks = styled.div`
  display: flex;
  width: 90vw;
  height: 100rem;
  align-items: center;
  justify-content: space-around;
  background: green;
  /* margin-top: 660px; */
  margin-bottom: 60px;
  padding-top: 28px;
  padding-bottom: 28px;

  @media screen and (max-width: 800px) {
    margin-top: 30px;
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 30px;
    justify-content: space-between;
  }
`

// export const Input = styled.input`
//   display: flex;
//   width: 50%;
//   height: 2rem;
//   align-items: center;
//   justify-content: center;
//   /* flex-direction: column; */
//   /* background: orange; */

// `

function Delete() {
  const [dados, setDados] = useState([])
  const [able, setAble] = useState(false)

  const navigate = useNavigate()

  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }

  const token = localStorage.getItem('token')

  async function deletePost() {
    const id = localStorage.getItem('ID')
    try {
      await api.delete(`/delete-post/${id}`)

      navigate('/posts')

      return alert(' Post Deletado!!')
    } catch (error) {
      return alert(error)
    }
  }


  async function handlePosts() {

    navigate('/posts')

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
  }, [])

  return (
    <Container>
      <HeaderComponent />

      <ContainerLinks style={{ height: '100px' }}>
        <Link to="/dashboard" style={{ color: 'yellow' }}>
          DASHBOARD
        </Link>

        <Link to="/register-post" style={{ color: 'yellow' }}>
          CADASTRO DE POST
        </Link>

        <Link to="/posts" style={{ color: 'yellow' }}>
          POSTS
        </Link>
        <Link to="/login" style={{ color: 'yellow' }}>
          LOGIN
        </Link>
      </ContainerLinks>
      <h1 style={{ fontSize: "29px" }}>DESEJA REALMENTE APAGAR O POST?</h1>

      <br />
      <br />
      <br />
      <Button onClick={deletePost}>SIM</Button>
      <br />
      <Button onClick={handlePosts}>NÃO</Button>

      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br />
    </Container>
  )
}

export default Delete
