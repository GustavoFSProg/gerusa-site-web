import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 300px;

  @media screen and (max-width: 800px) {
    margin-top: 0px;
    height: auto;
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
export const ImgSlideDois = styled.img`
  width: 40%;
  height: 50%;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    display: none;
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

  @media screen and (min-width: 800px) and (max-width: 1200px) {
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
  width: 40%;
  height: 100vh;
  align-items: left;
  justify-content: center;
  /* background: green; */
  font-size: 32px;
  /* margin-top: 108px; */
  color: #595959;
  text-align: left;
  margin-left: 180px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 18px;
    font-size: 26px;
    align-items: center;
    margin-bottom: 50px;
    margin-left: 20px;
  width: 70%;

  }
`

export const Hr = styled.hr`
  width: 100%;
  margin-top: 7px;
  margin-bottom: 250px;

  @media screen and (max-width: 800px) {
    margin-left: 17px;
    width: 19rem;
  }
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 500px;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  margin-top: -330px;
  margin-bottom: 200px;
  color: #666666;

  @media screen and (min-width: 300px) and (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    margin-top: -100px;
    font-size: 15px;
    margin-bottom: 0px;
    width: 84%;
    text-indent: 20px;
    /* height: 500px; */
  }

  @media screen and (min-width: 450px) and (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 100px;
    font-size: 17px;
  }
`

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 94%;
  margin-left: 11px;
  margin-bottom: 200px;
  margin-top: -40px;
  /* align-items: center;  */
  /* justify-content: center; */

  @media screen and (max-width: 800px) {
    flex-direction: column;
    display: flex;
  }
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  /* float: left; */
  text-align: left;

  /* margin-top: -5px;  */

  @media screen and (max-width: 800px) {
    /* flex-direction: column;
    justify-content: center;
    margin-top: 30px;

    height: 120%; */
  }
`

export const ImagemCard = styled.img`
  display: flex;
  width: 370px;

  @media screen and (max-width: 800px) {
    width: 307px;
  }
`

export const ContainerFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
  height: 500px;
  /* margin-left: 11px; */
  /* margin-bottom: 50px; */
  padding-top: 20px;

  margin-top: -40px;
  background: #008080;
  color: white;
  /* justify-content: center; */

  @media screen and (max-width: 800px) {
    flex-direction: column;
    display: flex;
    height: auto;
    padding-bottom: 50px;
    padding-top: 50px;
  }
`

export const ImagemCardTres = styled.img`
  display: flex;
  width: 370px;
  height: 248px;

  @media screen and (max-width: 800px) {
    width: 307px;
    height: 200px;
  }
`

export const ContainerTextImage = styled.div`
  display: flex;
  margin-left: 31px;
  align-items: flex-start;
  justify-content: center;
  text-align: justify;
  height: auto;
  width: 100%;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    display: flex;
    margin-top: -390px;
    height: auto;
  }
`

export const ContainerTextAll = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw; 

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    display: flex;
    margin-top: -160px;
    height: auto;
    z-index: -10;
  }
/* 
  @media screen and (min-width: 800px) and (max-width: 1200px) {
    flex-direction: column;
    display: flex;
    margin-top: 1030px;
    height: auto;
    z-index: -10;
  } */
`

export const DivFooter = styled.div`
  margin-top: -90px;
  width: 100%;

  @media screen and (max-width: 1200px) {
    margin-top: 0px;
  }
`
