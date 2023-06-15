import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;



`


export const ImgSlide = styled.img` 

 width: 40%; 
 height: 50%;
 margin-bottom: 300px;

 @media screen and (max-width: 800px){
  width: 100%; 
 height: 30%;

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