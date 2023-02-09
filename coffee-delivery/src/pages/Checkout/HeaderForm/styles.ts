import styled from "styled-components";

export const HeaderInputFormContainer = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: -2rem;
  gap: 0.5rem;
  padding: inherit;
  width: 100%;

  p {
    display: flex;
    justify-content: flex-start;
  align-items: center;
    font-size: 1rem;
    font-weight: 400;
    text-transform: capitalize;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
    text-transform: full-width;
    color: ${(props) => props.theme["base-text"]};
  }
`;
