import { useEffect, useState } from 'react'
import styled from 'styled-components'
import api from './api'
import HeaderComponent from './components/Header/Header'
import moment from 'moment'
import MenuMobile from './components/MenuMobile/MenuMobile'
// import { Link, useNavigate } from 'react-router-dom'

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
  font-size: 60px;

  @media screen and (max-width: 800px) {
    font-size: 60px;
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
const Menu = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
    width: 90%;
    height: 50px;
    border: 1px solid black;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    /* margin-top: -50px; */
  }
`

function PostsList() {
  const [dados, setDados] = useState([])
  const [isButtonClicked, setIsButtonClicked] = useState('none')

  function handleDismissButtonClicked() {
    setIsButtonClicked('none')
  }

  function handleOpenButtonClicked() {
    setIsButtonClicked('flex')
  }

  // const navigate = useNavigate()

  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
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
      <HeaderComponent />
      {isButtonClicked === 'none' ? (
        <Menu>
          <button
            onMouseLeave={() => handleDismissButtonClicked()}
            type="button"
            onClick={() => handleOpenButtonClicked()}
          >
            MENU
          </button>

          <button
            onMouseLeave={() => handleDismissButtonClicked()}
            type="button"
            // onClick={() => handleOpenButtonClicked()}
            style={{ display: 'none' }}
          ></button>
        </Menu>
      ) : (
        <Menu style={{ display: 'none' }}>
          <button
            onMouseLeave={() => handleDismissButtonClicked()}
            type="button"
            onClick={() => handleOpenButtonClicked()}
            style={{ display: 'none' }}
          >
            MENU
          </button>
        </Menu>
      )}
      {isButtonClicked === 'flex' ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '250px',
            marginTop: '-75px',
            zIndex: '999',
            background: 'lightgray',
            flexDirection: 'column',
            fontSize: '17px',
            paddingTop: '25px',
            paddingBottom: '25px',
            opacity: '0.6',
          }}
          onClick={() => handleOpenButtonClicked()}
          onMouseLeave={() => handleDismissButtonClicked()}
        >
          <MenuMobile />

        </div>
      ) : null}

      <ContainerMaps style={{ marginTop: '1px' }}>
        {dados.map((item) => {
          return (
            <div key={item.id}>
              <button onClick={() => setItem(item.id)}>
                <h2 style={{ fontSize: '32px' }}>
                  <p>{item.title}</p>
                </h2>

                <img src={item.image} alt="imagem" width="300" />

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
                      width: '520px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      lineHeight: '140%',
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

export default PostsList
