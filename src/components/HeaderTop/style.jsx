import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  align-items: top;
  justify-content: center;

  @media screen and (max-width: 800px){
    display: none;

  }


`

export const Header = styled.div`
  display: flex;
  width: 100vw;
  height: 42px;
  background: #990000;
  align-items: center;
  justify-content: left;
  color: white;
  font-size: 0.9rem;
  padding-left: 33px;
  font-weight: none;


`