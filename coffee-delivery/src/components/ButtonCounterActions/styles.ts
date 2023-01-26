import styled from "styled-components";



export const ButtoncounterContainer= styled.div`
  flex: 1;
  background: ${(props)=> props.theme["base-button"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${(props)=> props.theme["base-title"]};

    &:focus {
      outline: none;
    }}`
  
