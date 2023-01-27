import styled from "styled-components";

export const CoffeeListContainer = styled.section`
 width: 100%;
 margin-top: 2rem;
 
`;

export const CoffeeTitle = styled.h1`
font-family: 'Baloo 2', sans-serif;
 font-size: 2rem;
 color: ${(props) => props.theme["base-subtitle"]};

`;

export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;

`;