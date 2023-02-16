import {  CoffeCardContainer, DetailsContainer, TitleText } from "./styles";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { useCarts } from '../../../hooks/useCarts';

export function CoffeCardCheckout() {
  const {cartItems} = useCarts()
  return (
    <DetailsContainer>
      <TitleText>Cafés Selecionados</TitleText>
      <CoffeCardContainer>
      {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}
      
      <ConfirmationSection/>
      </CoffeCardContainer>
    </DetailsContainer>
  );
}
