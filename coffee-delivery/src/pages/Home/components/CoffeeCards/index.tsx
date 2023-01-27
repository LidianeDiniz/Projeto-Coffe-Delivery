import {
  CardPrice,
  CoffeeCardContainer,
  CounterActions,
  Description,
  Name,
  Tags,
} from "./styled";
import { ButtonCounterActions } from "../../../../components/ButtonCounterActions";
import { ShoppingCart } from "phosphor-react";
import { coffee } from "../../../../data/coffees"; 



export interface CoffeeProps {
  coffee: coffee;
}

export function CoffeeCards({ coffee }: CoffeeProps) {
  return (
    <CoffeeCardContainer>
      <img src={`/${coffee.image}`} />
      <Tags>
      {coffee.tags.map((tag) => (
          <span key={coffee.id}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>

      <Description>{coffee.description}</Description>

      <CardPrice>
        <div>
          <span>R$</span>

          <strong>
            {Intl.NumberFormat("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(coffee.price)}
          </strong>
        </div>

        <CounterActions>
          <ButtonCounterActions />
          <button>
            <ShoppingCart size={20} weight="fill" />
          </button>
        </CounterActions>
      </CardPrice>
    </CoffeeCardContainer>
  );
}
