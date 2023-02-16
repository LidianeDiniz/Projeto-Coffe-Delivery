import {
  CardPrice,
  CoffeeCardContainer,
  CounterActions,
  Description,
  Name,
  Tags,
} from "./styled";
import { ShoppingCart } from "phosphor-react";
import { useCarts } from "../../../../hooks/useCarts";
import { useState } from "react";
import { ButtonCounterActions } from "../../../../components/ButtonCounterActions";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCardsItem({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrement() {
    setQuantity((state) => state + 1);
  }

  function handleDecrement() {
    setQuantity((state) => state - 1);
  }

  const { AddToCart } = useCarts();
  function handleAddCoffeeCard() {
    const coffeeCard = {
      ...coffee,
      quantity,
    };
    AddToCart(coffeeCard);
  }
  return (
    <CoffeeCardContainer>
      <img src={`/${coffee.image}`} alt="" width={120} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
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
          <ButtonCounterActions
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
            quantity={quantity}
          />
          <button>
            <ShoppingCart
              onClick={handleAddCoffeeCard}
              size={20}
              weight="fill"
            />
          </button>
        </CounterActions>
      </CardPrice>
    </CoffeeCardContainer>
  );
}
