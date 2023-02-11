import { SuccessContainer, DetailsContainer, TitleText } from "./styles";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";

export function Success() {
  return (
    <DetailsContainer>
      <TitleText>Cafés Selecionados</TitleText>
      <SuccessContainer>
      <CoffeeCartCard />
      <CoffeeCartCard />
      <CoffeeCartCard />
      <ConfirmationSection/>
      </SuccessContainer>
    </DetailsContainer>
  );
}
