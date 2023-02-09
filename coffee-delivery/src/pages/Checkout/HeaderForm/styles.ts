import styled from "styled-components";

export const HeaderInputFormContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -2rem;
  gap: 1.5rem;
  padding: 2.5rem;
  width: 100%;

  p {
    display: flex;
    align-items: start;
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
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }
`;
