import { Trash } from "phosphor-react";
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
  TitleDescriptionCoffee,
} from "./styles";
import americano from "../../../assets/coffees/american.png";
import { ButtonCounterActions } from "../../../components/ButtonCounterActions/index";

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={americano} alt="" />
        <div>
          <TitleDescriptionCoffee>Expresso Tradicional</TitleDescriptionCoffee>
          <ActionsContainer>
            <ButtonCounterActions />
            <RemoveButton type="button">
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$9.90</p>
    </CoffeeCartCardContainer>
  );
}
