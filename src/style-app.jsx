import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;



`


export const ContainerImagens = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: space-around;
  margin-top: -750px;



 @media screen and (max-width: 800px){
  flex-direction: column;
  justify-content:center;
  margin-top: 0px;


  height: 120%;

 }



`
export const ImgSlide = styled.img` 

 width: 40%; 
 height: 50%;
 margin-bottom: 30px;

 @media screen and (max-width: 800px){
  width: 100%; 
 height: 50%;

 }

`


export const Menu = styled.div`
  display: none;
  

          @media screen and (max-width: 800px){
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