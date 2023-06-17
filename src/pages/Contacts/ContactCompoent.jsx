import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import styled from 'styled-components'
import api from '../../api'
import HeaderComponent from '../../components/Header/Header'
import moment from 'moment'

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

      <h1>MENSAGENS</h1>

      {dados.map(item => {
        return (
          <div key={item.id}>

            <p >
              Nome: {item.nome}
              <br />
              Email: {item.email}
              <br />

              Fone: {item.telefone}
              <br />

              Mensagem: {item.message}
              <br />
              Data: {getDateWithoutTime(item.createdAt)}
              <br />
              <br />
            </p>
          </div>

        )
      })}

    </Container >
  )
}

export default ContactComponent
