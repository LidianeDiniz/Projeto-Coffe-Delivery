import styled from "styled-components";

export const SuccessContainer = styled.div`
display: flex;
flex-direction: column;

gap: 0.66rem;
width: 32rem;
padding: 2.5rem;
background: ${(props) => props.theme["base-card"]};
display-flex;
flex-direction: column;
border-radius:6px 44px 6px 44px;
margin-top: 1.5rem;





`;

export const TitleText = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-style: 700;
  font-size: 1.3rem;

  background: ${(props) => props.theme["base-background"]};
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const DetailsContainer = styled.div`
  margin-rigth: 2rem;
  padding-rigth: 2rem;
  align-content: flex-start;
`;

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  
>.sumResult {
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props) => props.theme["base-subtitle"]};
 }
`;

export const Text = styled.p`
 font-size: 0.87rem;
 font-weight: regular;
 font-family: 'Roboto', sans-serif;
 color: ${(props) => props.theme["base-text"]};

`;



export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  color: ${(props) => props.theme["base-white"]};
  background: ${(props) => props.theme["brand-yellow"]};
  font-size: 0.87rem;
  font-weight: 700;
  background:;
  border: none;
  border-radius: 6px;
  margin-top: 0.7rem;
  text-transform: uppercase;
  transition: 0.4s;
  line-height: 1.3rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme["brand-yellow-dark"]};
  }
`;
