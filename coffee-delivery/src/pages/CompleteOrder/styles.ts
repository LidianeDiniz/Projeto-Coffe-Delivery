import styled from "styled-components";


export const CompleteOrderContainer = styled.form`
  width: 100%;
  max-width: 70rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2.5rem;
  gap: 2rem;

`;

export const Title = styled.h1`
font-family: 'Baloo 2', sans-serif;
font-style: 700;
font-size: 1.3rem;
display: flex;
align-items: left;

color: ${(props) => props.theme['base-subtitle']}

`;

