import styled from "styled-components";
import backgroundIntro from "../../../../assets/background-intro.png";

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
 

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme["base-title"]};

  background: ${() => `url(${backgroundIntro}) no-repeat center`};
  background-size: cover;

  h1 {
    margin-bottom: 1rem;
    font-size: 3rem;
    line-height: 3.85rem;
    font-weight: bold;
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const Subtitle = styled.p`
  margin-top: 1rem;
  font-size: 1.25rem;

  font-family: "Roboto", sans-serif;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const ImageContainer = styled.img`
  width: 70%;
  top: 5.75rem;
`;


export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  justify-items: start;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

`;



export const IconsContainer = styled.a`
  
  border-radius: 50%;
  color:${(props) => props.theme["brand-yellow"]};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  transition: filter 0.2s;
  gap: 0.8rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;

&:hover{
  filter: brightness(1.2)
}
}

`;
