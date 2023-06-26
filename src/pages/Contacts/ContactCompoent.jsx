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
   margin-top: -20px; 


`

export const H1 = styled.h1`
  display: flex;
  align-items: center;
  font-size: 40px;
  margin-top: 80px;


  @media screen and (max-width: 800px) {
    font-size: 29px;
    margin-top: 50px;
  }
`

export const ContainerLinks = styled.div`
  display: flex;
  width: 90vw;
  height: 90px;
  align-items: center;
  justify-content: space-around;
  background: green;
  margin-top: 50px;
  /* margin-bottom: 200px; */

  @media screen and (max-width: 800px){
  margin-top: 30px;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 30px;
  justify-content: space-between;


  }
`

export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  height: 350px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

function ContactComponent() {
  const [dados, setDados] = useState([])
  const [abled, setAbled] = useState(false)



  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }




  const token = localStorage.getItem('token')

  async function HandleAuth() {
    const { data } = await api.get('/get-all-contacts')

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
      <ContainerLinks>
        <Link to="/dashboard" style={{ color: 'yellow' }}>
          DASHBOARD
        </Link>

        <Link to="/contacts" style={{ color: 'yellow' }}>
          CONTATOS
        </Link>

        <Link to="/posts" style={{ color: 'yellow' }}>
          POSTS
        </Link>
        <Link to="/posts" style={{ color: 'yellow' }}>
          USUÁRIOS
        </Link>
      </ ContainerLinks>

      <H1>MENSAGENS</H1>

      {dados.map(item => {
        return (
          <div key={item.id}>

            <p >
              Nome: {item.nome}
            </p>

            <p >
              Email: {item.email}
            </p>

            <p >
              Telefone: {item.telefone}
            </p>

            <p >
              Mensagem: {item.message}
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

export default ContactComponent