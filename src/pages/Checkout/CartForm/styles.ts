import styled from 'styled-components'

export const CartFormContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`
export const Grid = styled.div`
  margin: 0.5rem;
  top: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  width: 40rem;
`

export const Title = styled.h1`
font-family: 'Baloo 2', sans-serif;
font-style: 700;
font-size: 1.3rem;
display: flex;
width: 100%;
padding-bottom: 0.90rem;
background: ${(props) => props.theme['base-background']}
color: ${(props) => props.theme['base-subtitle']}

`

export const AdressHeaderContainer = styled.section`

display: flex;
margin-bottom: 5rem;




}
`

export const AdressContainer = styled.form`

    
display: grid;
justify-content: center

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
  
  `

export const PaymentContainer = styled.footer`

background: ${(props) => props.theme['base-card']};
border-radius: 6px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
padding: 2.5rem;
width: 40rem;

}
`
