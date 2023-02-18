import styled, { css } from 'styled-components'

interface InputWrapperProps {
  hasError?: boolean
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1.6rem;

  p {
    color: ${(props) => props.theme['base-label']};
  }
`

export const InputWrapper = styled.div<InputWrapperProps>`
  height: 4.2rem;
  border-radius: 0.4rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  transition: 0.4s;

  &:focus-within {
    border-color: ${(props) => props.theme['brand-yellow-dark']};
  }

  ${({ hasError, theme }) =>
    hasError &&
    css`
      border-color: ${(props) => props.theme['base-error']};
    `}
`

export const InputItem = styled.input`
  flex: 1;
  background: none;
  border: none;
  padding: 0 1.2rem;
  height: 100%;
  font-size: 1.4rem;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const InfoRight = styled.p`
  font-size: 1.2rem;
  margin-right: 1.2rem;
  font-style: italic;
  color: ${(props) => props.theme['base-label']};
`

export const ErrorInfo = styled.span`
  margin-top: -0.8rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme['base-error']};
`
