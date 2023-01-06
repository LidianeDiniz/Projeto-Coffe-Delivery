import styled from "styled-components";
import backgroundIntro from '../../../assets/background-intro.png';


export const IntroContainer = styled.section`

      
   width: 100%;
   max-width:1120px;
   margin 0 auto;
   padding: 0 10rem;
   background: ${(props) => props.theme['base-background']};
   
    background: ${()=> `url(${backgroundIntro}) no-repeat center`};
    background-size: cover;
    
`;

export const IntroContent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 3.5rem;
`;