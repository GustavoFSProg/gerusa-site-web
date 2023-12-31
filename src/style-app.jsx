import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background: #f2f2f2; */
  z-index: 1;

  @media screen and (max-width: 800px) {
    height: 220%;
  }
`

export const ContainerImagens = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: space-around;
  /* margin-top: -685px; */
  z-index: 999;

  @media screen and (max-width: 980px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
    /* z-index: -10; */

    height: 120%;
  }
`
export const ImgSlide = styled.img`
  width: 40%;
  height: 50%;
  margin-bottom: 30px;

  @media screen and (max-width: 980px) {
    width: 100%;
    height: 50%;
  }
`
export const ImgSlideDois = styled.img`
  width: 40%;
  height: 50%;
  margin-bottom: 30px;

  @media screen and (max-width: 980px) {
    display: none;
  }
`
export const Menu = styled.div`
  display: none;

  @media screen and (max-width: 1080px) {
    display: flex;
    width: 90%;
    height: 50px;
    border: 1px solid black;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
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
  color: #595959;

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
  margin-top: -100px;
  margin-bottom: 200px;
  color: #666666;

  @media screen and (min-width: 300px) and (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    margin-top: -8px;
    font-size: 17px;
    margin-bottom: 362px;
  }

  @media screen and (min-width: 450px) and (max-width: 870px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 32px;
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
  margin-top: -70px;
  /* align-items: center;  */
  /* justify-content: center; */

  @media screen and (min-width: 900px) and (max-width: 1200px) {
    flex-direction: column;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    display: flex;
    margin-top: -200px;
    margin-bottom: -10px;
  }
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  text-align: left;
  /* background: #e6e6e6; */

  @media screen and (max-width: 800px) {
  }
`

export const ImagemCard = styled.img`
  display: flex;
  width: 370px;

  @media screen and (max-width: 800px) {
    width: 307px;
  }
`

export const ImagemCardA = styled.img`
  display: flex;
  width: 22.8rem;
  height: 22.8rem;

  @media screen and (max-width: 800px) {
    width: 18.8rem;
    height: 14rem;
  }
`

export const ImagemCardB = styled.img`
  display: flex;
  width: 22.8rem;
  height: 15.5rem;

  @media screen and (max-width: 800px) {
    width: 18.8rem;
    height: 14rem;
  }
`

export const ContainerFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
  height: 500px;
  padding-top: 20px;

  margin-top: -40px;
  background: #008080;
  color: white;

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

export const WhatsContainer = styled.div`
  position: fixed;
  top: 780px;
  right: 41pt;
  z-index: 100;

  @media screen and (max-width: 370px) {
    top: 576px;
    right: 23pt;
  }

  @media screen and (min-width: 370px) and (max-width: 800px) {
    top: 616px;
    right: 23pt;
  }
`

export const Imagem = styled.img`
  display: flex;
  width: 67px;
  height: 67px;

  @media screen and (max-width: 800px) {
    width: 55px;
    height: 55px;
  }
`
