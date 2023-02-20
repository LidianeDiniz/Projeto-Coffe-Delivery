import styled from 'styled-components'

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`

export const Text = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-error']};
  grid-collumn: span 3;
`
