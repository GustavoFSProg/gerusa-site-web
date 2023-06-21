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
  /* margin-top: -660px; */
  margin-bottom: 200px;
  padding-top: 28px;
  padding-bottom: 28px;



  @media screen and (max-width: 800px){
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


  @media screen and (max-width: 800px){
  margin-top: 30px;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 30px;
  justify-content: space-between;


  }
  `


function Profile() {
  const [dados, setDados] = useState({})

  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
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
        <Link to="/end" style={{ color: 'yellow' }}>
          EDITAR
        </Link>
      </ ContainerLinks>


      <ContainerMaps>
        <h1  >
          PROFILE
        </h1>
        <div key={dados.id}>


          <h2 style={{ fontSize: '34px' }} >
            <p >
              {dados.title}
            </p>
          </h2>
          <img src={dados.image} alt="imagem" width="300" />
          <div style={{
            width: '100%', display: 'flex',
            alignItems: 'center', justifyContent: 'center'
          }}>
            <p style={{
              width: '50%', display: 'flex',
              alignItems: 'center', justifyContent: 'center'
            }}>
              {dados.text}
            </p>
          </div>

          <p >
            {dados.desc}
          </p>

          <p >
            {getDateWithoutTime(dados.createdAt)}
          </p>
          <br />
          <br />
          <br />
        </div>

      </ ContainerMaps>

    </Container >
  )
}

export default Profile
