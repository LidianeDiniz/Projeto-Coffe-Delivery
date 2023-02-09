import { Trash } from "phosphor-react";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";



export function CoffeeCartCard(){

  return (
    <CoffeeCartCardContainer>
      <div>
        
        <div>
          
          <ActionsContainer>
            
            
            <RemoveButton type="button">
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9.90</p>
    </CoffeeCartCardContainer>
  );
  }