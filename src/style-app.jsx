import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;


  @media screen and (max-width: 800px) {
   
    height: 220%;
  }
`

export const ContainerImagens = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: space-around;
  margin-top: -685px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;

    height: 120%;
  }
`
export const ImgSlide = styled.img`
  width: 40%;
  height: 50%;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 50%;
  }
`

export const Menu = styled.div`
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

export const ContainerH1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  /* background: green; */
  font-size: 32px;
  margin-top: 148px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 138px;
  font-size: 26px;


  }
`

export const Hr = styled.hr`
  width: 50%;
  margin-top: 7px;
  margin-bottom: 250px;

  @media screen and (max-width: 800px) {
    width: 78%;
  }
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100px;
  align-items: center;
  justify-content: center;
  /* background: green; */
  font-size: 19px;
  margin-top: -67px;
  margin-bottom: 200px;

  @media screen and (min-width: 300px) and (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 150px;
  font-size: 17px;


  }

  @media screen and (min-width: 450px) and (max-width: 850px){
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
  font-size: 17px;
  }
`