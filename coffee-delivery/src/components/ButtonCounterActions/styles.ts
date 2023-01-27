import styled from "styled-components";



export const ButtoncounterContainer= styled.div`
  flex: 1;
  background: ${(props)=> props.theme["base-button"]};
  color: ${(props)=> props.theme["brand-purple"]};
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
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3rem;
    padding: 0.5rem;
          
   
  
  
      
    }
    &:focus {
      outline: none;
    }

    }`

    export const IconAdd = styled.button`
    
      background: none;
      color: ${(props)=> props.theme["brand-purple"]};
      border: none;
      font-size: 1rem;      
      transition: all .5s;
      border: 3px solid transparent;

      &:hover {
        border: 3px solid #4B2995;
        border-radius: 50%;
      }
      

       
    `;
  
