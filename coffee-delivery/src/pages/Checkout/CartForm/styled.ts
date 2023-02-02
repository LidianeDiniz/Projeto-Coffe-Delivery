import styled from "styled-components";

export const AdressContainer = styled.form`
    
    display: grid;
    column-gap: 0.75rem;
    row-gap: 1rem;
    
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


