import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: top;
  justify-content: center;


`

export const Header = styled.div`
  display: flex;
  width: 100vw;
  height: 185px;
  align-items: center;
  justify-content: left;
  /* color: white; */
  font-size: 0.9rem;
  padding-left: 33px;


`

export const ContainerLinks = styled.div`
  display: flex;
  width: 68%;
  height: 120px;
  align-items: center;
  justify-content: space-around;
  /* color: white; */
  font-size: 1rem;
  margin-left: 113px;

  @media screen and (max-width: 800px){
    display: none;

  }


`