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
  cursor: pointer;
  padding: 0 1.6rem;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;
  text-transform: uppercase;
  border-radius: 0.6rem;
  height: 5.1rem;
  font-size: 1.2rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  transition: 0.4s;

  svg {
    color: ${(props) => props.theme['brand-purple']};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  user-select: none;
`