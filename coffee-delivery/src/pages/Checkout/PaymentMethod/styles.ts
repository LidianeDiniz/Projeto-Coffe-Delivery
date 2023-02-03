import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    background: ${(props) => props.theme['brand-purple-light']};
    border: 1px solid ${(props) => props.theme['brand-purple']};

    &:hover {
      background: ${(props) => props.theme['brand-purple-light']};
    }
  }
`

export const ContentContainer = styled.div`
  width: 11.5rem;
  height: 3.18rem;
  
  display: flex;
  justify-content: center;
  align-items: center;
  padding:  1rem;
  gap: 0.75rem;
  border-radius: 6px;
  font-size: 0.75rem;
  
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;
  background: ${(props) => props.theme['base-button']};
  border: 1px solid ${(props) => props.theme['base-button']};
  cursor: pointer;
  transition: 0.4s;

  svg {
    color: ${(props) => props.theme['brand-purple']};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  user-select: none;
`