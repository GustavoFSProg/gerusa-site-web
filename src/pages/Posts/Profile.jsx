import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
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

export const H1 = styled.h1`
  display: flex;
  align-items: center;
  font-size: 40px;

  @media screen and (max-width: 800px) {
    font-size: 29px;
  }
`

export const ContainerLinks = styled.div`
  display: flex;
  width: 90vw;
  height: 100rem;
  align-items: center;
  justify-content: space-around;
  background: green;
  /* margin-top: -660px; */
  margin-bottom: 200px;
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


export const ContainerButtons = styled.div`
  display: flex;
  width: 30rem;
  /* height: 100rem; */
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 200px;
  padding-top: 28px;
  padding-bottom: 28px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`


const ContainerMaps = styled.div`
  display: flex;
  width: 90vw;
  height: auto;
  align-items: center;
  justify-content: space-around;
  /* background: pink; */
  margin-top: -150px;
  /* margin-bottom: 200px; */
  flex-direction: column;

  @media screen and (max-width: 800px) {
    margin-top: 30px;
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 30px;
    justify-content: space-between;
  margin-top: -200px;

  }
`

function Profile() {
  const [dados, setDados] = useState({})

  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }

  const navigate = useNavigate()

  function HandleEditar() {
    const id = localStorage.getItem('ID')

    navigate('/update')
  }

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

  const token = localStorage.getItem('token')

  const id = localStorage.getItem('ID')

  async function HandleAuth() {
    const id = localStorage.getItem('ID')

    const { data } = await api.get(`/get-post/${id}`)

    setDados(data)

    console.log(dados)

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
          PAINEL
        </Link>

        <Link to="/register-post" style={{ color: 'yellow' }}>
          CADASTRO DE POST
        </Link>

        <Link to="/posts" style={{ color: 'yellow' }}>
          POSTS
        </Link>
        <Link to="/end" style={{ color: 'yellow' }}>
          EDITAR
        </Link>
      </ContainerLinks>

      <ContainerMaps>
        <H1>PERFIL</H1>
        <div key={dados.id}>
          <h2 style={{ fontSize: '34px' }}>
            <p>{dados.title}</p>
          </h2>
          <img src={`http://localhost:5000/files/${dados.image}`} alt="imagem" width="300" />
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <p
              style={{
                width: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {dados.text}
            </p>
          </div>

          <p>{dados.desc}</p>

          <p>{getDateWithoutTime(dados.createdAt)}</p>
          <br />
          <br />
          <br />
        </div>
      </ContainerMaps>

      <ContainerButtons >


        <Button onClick={HandleEditar}>EDITAR</Button>

        <Button onClick={deletePost}>DELETAR</Button>
      </ContainerButtons>
      <br />
      <br />
      <br />
      <br />

    </Container>

  )
}

export default Profile
