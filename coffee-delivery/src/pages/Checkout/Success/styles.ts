import styled from "styled-components";

export const SuccessContainer = styled.div`
display: flex;
flex-direction: column;

gap: 0.66rem;
width: 32rem;
padding: 2.5rem;
background: ${(props)=> props.theme['base-card']};
display-flex;
flex-direction: column;
border-radius:6px 44px 6px 44px;
margin-top: 1.5rem;





`;

export const TitleText = styled.h1`
font-family: 'Baloo 2', sans-serif;
font-style: 700;
font-size: 1.3rem;

background: ${(props) => props.theme['base-background']};
color: ${(props) => props.theme['base-subtitle']}

`

export const DetailsContainer = styled.div`
margin-rigth: 2rem;
width: 32rem;
padding-rigth: 2rem;
  align-content: flex-start


`

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  
 

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;