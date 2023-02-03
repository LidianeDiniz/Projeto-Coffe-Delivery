import styled from "styled-components";


export const CompleteOrderContainer = styled.form`
  width: 100%;
  max-width: 70rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  gap: 0.75rem;
  width: 40rem;

`;

export const Title = styled.h1`
font-family: 'Baloo 2', sans-serif;
font-style: 700;
font-size: 1.3rem;
display: flex;

color: ${(props) => props.theme['base-subtitle']}

`;



export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;


  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }
  .street {
    grid-column: span 3;
  }
  .complement {
    grid-column: span 2;
  }
`;

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;


 
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;



  
`;



