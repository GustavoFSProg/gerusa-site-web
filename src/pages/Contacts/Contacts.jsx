import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import styled from 'styled-components'
import api from '../../api'
import HeaderComponent from '../../components/Header/Header'
import moment from 'moment'
import ContactComponent from './ContactCompoent'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 500px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 110px;
  
`

export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  height: 350px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

function Contacts() {
  const [dados, setDados] = useState([])
  const [abled, setAbled] = useState(false)



  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }


  async function HandleAuth() {
    setAbled(true)

  }


  const token = localStorage.getItem('token')

  async function HandleContacts() {
    const { data } = await api.get('/get-all-contacts')

    setDados(data.data)

    console.log(dados)

    return (< p >

    </p>)
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
      {dados === 'OK' ? <ContactComponent /> : <h5>ACESSO PROIBIDO!!!</h5>}



    </Container >
  )
}

export default Contacts
