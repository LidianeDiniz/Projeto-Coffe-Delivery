import styled from 'styled-components'

export const HeaderInputFormContainer = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 auto;
  margin-bottom: -2rem;
  gap: 0.5rem;
 
  p {
    
    display: flex;
    align-items: start;
    font-size: 1rem;
    font-weight: 400;
    text-transform: capitalize;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: start;
    font-size: 0.875rem;
    text-transform: full-width;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};



  }
`