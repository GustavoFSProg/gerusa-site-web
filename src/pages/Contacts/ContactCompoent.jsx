import { useEffect, useState } from 'react'
import styled from 'styled-components'
import api from '../../api'
// import HeaderComponent from '../../components/Header/Header'
import moment from 'moment'
import { Link, useNavigate } from 'react-router-dom'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
// import SimpleCard from '../../components/BasicCard'

import { makeStyles } from '@material-ui/core/styles'
import Carder from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import BButton from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: top;
  flex-direction: column;
  margin-top: -20px;
  /* margin-bottom: 200px; */
`

export const Button = styled.button`
  background: none;
  display: flex;
  align-items: end;
  margin-left: 560px;

  @media screen and (max-width: 800px) {
    margin-left: 250px;
  }
`

const Card = styled.div`
  display: flex;
  width: 50rem;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #c6ecd8;
  margin-top: 30px;
  padding: 15px 15px;
  border-radius: 2rem;
  z-index: 0;

  @media screen and (max-width: 850px) {
    width: 20rem;
  }
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

  @media screen and (max-width: 800px) {
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

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

function ContactComponent() {
  const [dados, setDados] = useState([])
  const [buttonopen, setButtonOpen] = useState(false)

  const navigate = useNavigate()

  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }

  function SimpleCard(id) {
    const classes = useStyles()
    const bull = <span className={classes.bullet}>•</span>

    const Id = sessionStorage.getItem('CONTACT')
    // console.log(`ID: ${id}`)

    return (
      <Carder
        style={{ position: 'fixed', background: '#ffffcc', width: '350px', zIndex: '9999' }}
        className={classes.root}
      >
        <CardContent>
          <Typography
            style={{ fontSize: '21px', color: '#595959' }}
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Deseja realmente apagar essa mensagem?
          </Typography>
          <Typography variant="h5" component="h2">
            <BButton
              style={{ fontSize: '20px', marginRight: '20px' }}
              size="small"
              onClick={() => DeleteMensagem(Id)}
            >
              SIM
            </BButton>
            <BButton style={{ fontSize: '20px' }} size="small" onClick={() => setButtonOpen(false)}>
              NÃO
            </BButton>
          </Typography>
        </CardContent>
        <CardActions>
          <BButton style={{ color: '#e60000' }} size="small" onClick={() => setButtonOpen(false)}>
            FECHAR
          </BButton>
        </CardActions>
      </Carder>
    )
  }

  function CardButton(id) {
    sessionStorage.setItem('CONTACT', id)
    return setButtonOpen(true)
    // return <SimpleCard />
    // return alert("Olá")
  }

  async function HandleAuth() {
    const { data } = await api.get('/get-all-contacts')

    setDados(data.data)

    // console.log(dados)

    return <p></p>
  }

  async function DeleteMensagem(id) {
    try {
      await api.delete(`/delete-contacts/${id}`)

      // location.reload()

      navigate('/dashboard')

      return alert('Mensagem Apagada!')
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    HandleAuth()
  }, [])

  return (
    <>
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
        </ContainerLinks>

        <H1>MENSAGENS</H1>

        {buttonopen === true ? (
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center'
              // marginTop: '600px'
            }}
          >
            <SimpleCard />
          </div>
        ) : // console.log('Fechado')
        null}

        {dados.map((item) => {
          return (
            <Card key={item.id}>
              <div>
                <Button type="button" onClick={() => CardButton(item.id)}>
                  <DeleteForeverIcon fontSize="large" />
                </Button>

                {/* <button type="button" onClick={() => CardButton()}>
                  CardButton
                </button> */}

                <p style={{ fontSize: '17px' }}>
                  <strong style={{ fontSize: '17px', marginRight: '10px' }}>Nome:</strong>
                  {item.nome}
                </p>

                <p style={{ fontSize: '17px' }}>
                  <strong style={{ fontSize: '17px', marginRight: '10px' }}>Email:</strong>
                  {item.email}
                </p>

                <p style={{ fontSize: '17px' }}>
                  <strong style={{ fontSize: '17px', marginRight: '10px' }}>Telefone:</strong>
                  {item.telefone}
                </p>

                <p style={{ fontSize: '17px' }}>
                  <strong style={{ fontSize: '17px', marginRight: '10px' }}>Mensagem:</strong>{' '}
                  {item.message}
                </p>

                <p style={{ fontSize: '17px' }}>
                  <strong style={{ fontSize: '17px', marginRight: '10px' }}>Data:</strong>{' '}
                  {getDateWithoutTime(item.createdAt)}
                </p>
              </div>
            </Card>
          )
        })}
        <br />
        <br />

        <p style={{ color: 'white' }}>colors</p>
        <br />
        <br />
      </Container>
    </>
  )
}

export default ContactComponent
