import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import styled from 'styled-components'
import api from '../../api'
import HeaderComponent from '../../components/Header/Header'
import moment from 'moment'
import { Link, useNavigate } from 'react-router-dom'

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
  margin-top: -660px;
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

function PostComponent() {
  const [dados, setDados] = useState([])

  const navigate = useNavigate()

  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }

  function setItem(id) {
    localStorage.setItem('ID', id)

    navigate('/profile')
  }

  const token = localStorage.getItem('token')

  async function HandleAuth() {
    const { data } = await api.get('/get-all-posts')

    setDados(data.data)

    console.log(dados)

    return <p></p>
  }

  useEffect(() => {
    HandleAuth()
  }, [])

  return (
    <Container>
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
        <Link to="/posts" style={{ color: 'yellow' }}>
          EDITAR
        </Link>
      </ContainerLinks>
      <ContainerMaps>
        <H1>POSTS</H1>
        {dados.map((item) => {
          return (
            <div key={item.id}>
              <button onClick={() => setItem(item.id)}>
                <h2 style={{ fontSize: '34px' }}>
                  <p>{item.title}</p>
                </h2>
                {/* <img src={`http://localhost:5000/files/${item.image}`} alt="imagem" width="300" /> */}
                <img
                  src={`https://gerusa-site-api-juab.vercel.app/files/${item.image}`}
                  alt="imagem"
                  width="300"
                />
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
                    {item.text}
                  </p>
                </div>

                <p>{item.desc}</p>

                <p>{getDateWithoutTime(item.createdAt)}</p>
                <br />
                <br />
                <br />
              </button>
            </div>
          )
        })}
      </ContainerMaps>
    </Container>
  )
}

export default PostComponent