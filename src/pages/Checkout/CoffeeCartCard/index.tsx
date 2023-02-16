import { Trash } from "phosphor-react";
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
  TitleDescriptionCoffee,
} from "./styles";
import { ButtonCounterActions } from "../../../components/ButtonCounterActions/index";
import { useCarts } from "../../../hooks/useCarts";
import { CartItem } from "../../../CartContext";


interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({coffee}: CoffeeCartCardProps) {

  const {modifyCartItem} = useCarts();

  function handleIncrement(){
    modifyCartItem(coffee.id, 'increment')
  }

  function handleDecrement(){
    modifyCartItem(coffee.id, 'decrement')
  }

  function formatMoney(value: number) {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    });
  }


  const coffeeTotal = coffee.price * coffee.quantity;
  const formattedCoffeePrice = formatMoney(coffeeTotal);
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/${coffee.image}`}alt="" />
        <div>
          <TitleDescriptionCoffee>{coffee.name}</TitleDescriptionCoffee>
          <ActionsContainer>
            <ButtonCounterActions 
            onDecrement={handleDecrement} 
            onIncrement={handleIncrement} 
            quantity={coffee.quantity} />
            <RemoveButton type="button">
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>{formattedCoffeePrice}</p>
    </CoffeeCartCardContainer>
  );
}
