import {
  CardPrice,
  CoffeeCardContainer,
  CounterActions,
  Description,
  Name,
  Tags,
} from "./styled";
import arabic from "../../../../assets/coffes/arabic.png";
import { ButtonCounterActions } from "../../../../components/ButtonCounterActions";
import { ShoppingCart } from "phosphor-react";

export interface Coffee {
  id:number;
  name:string;
  description:string;
  price:number;
  image:string;
  tags:string[],
  quantity:number
}

interface CoffeeProps{
  coffee: Coffee;
}

export function CoffeeCards({coffee}: CoffeeProps) {
  return (
    <CoffeeCardContainer>
      <img src={arabic} alt="" />
      <Tags>
       {coffee.tags.map(tag =>(
        <span key={`${coffee.id}${tag}`}></span>
       ))}
      </Tags>

      <Name>Expresso Tardicional</Name>

      <Description>
        Uma dose de café expresso com o dobro de leite e espuma cremosa
      </Description>

      <CardPrice>
        <div>
          <span>R$</span>
          <strong>9,90</strong>
        </div>

        <CounterActions>
         
          <ButtonCounterActions />
        <button>
            <ShoppingCart size={20} weight="fill"/>
        </button>
        </CounterActions>
      </CardPrice>
    </CoffeeCardContainer>
  );
}
