import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import styled from 'styled-components'
import api from '../../api'
import HeaderComponent from '../../components/Header/Header'
import moment from 'moment'
import PostComoponent from './PostComoponent'
import { Link } from 'react-router-dom'

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
  font-size: 40px;

  @media screen and (max-width: 800px) {
    font-size: 22px;
  }
`


function Posts() {
  const [dados, setDados] = useState([])

  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }

  const token = sessionStorage.getItem('token')

  async function HandlePosts() {
    const { data } = await api.get('/get-all-contacts')

    setDados(data.data)

    console.log(dados)

    return <p></p>
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

      {dados === 'OK' ? <PostComoponent /> : <h1>ACESSO PROIBIDO!!!</h1>}
    </Container>
  )
}

export default Posts
