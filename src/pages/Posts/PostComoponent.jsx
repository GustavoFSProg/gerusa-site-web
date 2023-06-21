import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import styled from 'styled-components'
import api from '../../api'
import HeaderComponent from '../../components/Header/Header'
import moment from 'moment'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 800px;
`

export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  height: 350px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

function PostComponent() {
  const [dados, setDados] = useState([])

  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }




  const token = localStorage.getItem('token')

  async function HandleAuth() {
    const { data } = await api.get('/get-all-posts')

    setDados(data.data)

    console.log(dados)

    return (< p >

    </p>)
  }

  useEffect(() => {
    HandleAuth()
  }, [])

  return (
    <Container>


      <h1>POSTS</h1>

      <Link to="/register-post">
        CADASTRO DE POST
      </Link>
      <br /><br />
      <Link to="/posts">
        LISTA DE POSTS
      </Link>

      {dados.map(item => {
        return (
          <div key={item.id}>

            <p >
              {item.title}
            </p>
            <img src={item.image} alt="imagem" width="200" />

            <p >
              {item.text}
            </p>

            <p >
              {item.desc}
            </p>

            <p >
              {item.createdAt}
            </p>
            <br />
            <br />
            <br />
          </div>

        )
      })}

    </Container >
  )
}

export default PostComponent
