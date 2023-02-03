import styled from "styled-components";


export const Grid = styled.div`
margin: 0.5rem;
padding: 2.5rem;
top: 0;
width: 532px;

`;

export const AdressHeaderContainer = styled.section`
background: ${(props) => props.theme['base-card']};
display: flex;
margin-bottom: 5rem;
border-radius: 0.6rem;

}
`;


export const AdressContainer = styled.form`
    
    display: grid;
    column-gap: 0.75rem;
    row-gap: 1rem;
    margin-bottom: 5.75rem;

    
    .cep {
      display: grid;
      grid-template-columns: repeat( 1fr);
      max-width: 12.5rem;
    }
    .street {
      grid-column: span 3;
    }
    .complement {
      grid-column: span 2;
      gap: 5px;
      
     
  }
  
  input {
    padding: 0.75rem;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
  
  
  } 
  
  `;

export const PaymentContainer = styled.footer`
background: ${(props) => props.theme['base-card']};
border-radius: 0.6rem;

}
`;


