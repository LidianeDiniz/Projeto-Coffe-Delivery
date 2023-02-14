import styled from "styled-components";

export const CoffeeCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    align-self: flex-start;

    color: ${(props) => props.theme["base-text"]};
  }
`;

export const TitleDescriptionCoffee = styled.h4`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const ActionsContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;

  gap: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme["base-text"]};
  font-size: 0.75rem;
  height: 100%;
  border: none;
  background: ${(props) => props.theme["base-button"]};
  padding: 0 0.5rem;
  border-radius: 6px;
  transition: 0.4s;

  svg {
    color: ${(props) => props.theme["brand-purple"]};
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }
`;
