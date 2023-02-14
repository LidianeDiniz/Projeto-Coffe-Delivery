import {  CoffeCardContainer, DetailsContainer, TitleText } from "./styles";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";

export function CoffeCardCheckout() {
  return (
    <DetailsContainer>
      <TitleText>Cafés Selecionados</TitleText>
      <CoffeCardContainer>
      <CoffeeCartCard />
      <CoffeeCartCard />
      <CoffeeCartCard />
      <ConfirmationSection/>
      </CoffeCardContainer>
    </DetailsContainer>
  );
}
