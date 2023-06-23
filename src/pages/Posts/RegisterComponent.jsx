import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import styled from 'styled-components'
import api from '../../api'
import HeaderComponent from '../../components/Header/Header'
import moment from 'moment'
import PostComoponent from './PostComoponent'
import { Link } from 'react-router-dom'
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

// export const Input = styled.input`
//   display: flex;
//   width: 50%;
//   height: 2rem;
//   align-items: center;
//   justify-content: center;
//   /* flex-direction: column; */
//   /* background: orange; */

// `

export const ContainerLinks = styled.div`
  display: flex;
  width: 90vw;
  height: 100rem;
  align-items: center;
  justify-content: space-around;
  background: green;
  /* margin-top: -660px; */
  margin-bottom: 60px;
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

function RegisterComponent() {
  const [dados, setDados] = useState([])
  const [able, setAble] = useState(false)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState([])
  const [desc, setDesc] = useState('')
  const [views, setViews] = useState('1')
  const [likes, setLikes] = useState('1')


  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }

  const token = localStorage.getItem('token')

  async function HandlePosts() {
    const { data } = await api.get('/get-all-contacts')

    setDados(data.data)

    console.log(dados)

    return <p></p>
  }



  async function handleSubmit(event) {
    event.preventDefault()

    try {
      console.log(`Token:${token}`)

      if (!token) return alert('Token Inválido, efetue o Login novamente!!')

      const data = new FormData()

      data.append('title', title)
      data.append('text', text)
      data.append('author', author)
      data.append('image', image)
      data.append('views', views)
      data.append('likes', likes)
      data.append('desc', desc)
      // data.append('token', token)

      // await api.post('/register', data)

      await api.post('/register', data)

      // history.push('/')

      return alert('Cadastro realizado com sucesso!')
    } catch (error) {
      return alert(error)
    }
  }

  function handleAbled() {
    setAble(true)
    return
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

      <h1  >
        CADASTRO DE  POSTS
      </h1>

      <br />
      {dados === 'OK' ? null : <h1>ACESSO PROIBIDO!!!</h1>}
      <br />
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column', width: '40%'
      }}>
        <br />
        Imagem   <input
          type="file"
          id="image"
          className="botao-imagem"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <Input

          placeholder="Titulo"
          invalid={true}
          id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        Texto    <textarea
          rows="22"
          cols="50"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            borderRadius: '8px',
            border: '1px solid rgba(37, 0, 50, 0.25)',
            boxShadow: '0px 0px 5px 1px rgba(37, 0, 50, 0.25)'

          }}
        />
        <br />
        <Input

          placeholder="Descrição"
          invalid={true}

          id="autor" value={desc} onChange={(e) => setDesc(e.target.value)} />
        <br />
        <Input

          placeholder="Autor"
          invalid={true}
          id="autor" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <br /><br />
        {dados === 'OK' ? <Button type="submit">Cadastrar</Button> : "Botao desabiitado!!"}

      </form>
    </Container>
  )
}

export default RegisterComponent
