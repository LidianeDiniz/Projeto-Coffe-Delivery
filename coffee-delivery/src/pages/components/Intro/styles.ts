import styled from "styled-components";
import backgroundIntro from '../../../assets/background-intro.png';


export const IntroContainer = styled.section`

      
   width: 100%;
   height:34rem;
   max-width:1120px;
   margin 0 auto;
   display: flex;
   align-items: center;
   justify-content: sapace-between;
   padding: 0 10rem;
   
   background: ${(props) => props.theme['base-title']};
   
    background: ${()=> `url(${backgroundIntro}) no-repeat center`};
    background-size: cover;

    h1 {
      width:588px;
      height: 124px;
      margin-bottom: 1rem;
      font-size: 3rem;
      line-height: 3.85rem;
      font-weight: bold;
      font-family: 'Baloo 2', sans-serif;
      color:${(props) => props.theme['base-title']};
    }
    
`;

export const Subtitle = styled.p`
  margin-top: 1rem;
  font-size: 1.25rem;
  
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme['base-subtitle']};
`

export const IntroContent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 3.5rem;
`;

export const ImageContainer = styled.img`
width: 50%;

`;