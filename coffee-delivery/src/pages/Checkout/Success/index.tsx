import { SuccessContainer, DetailsContainer, TitleText } from "./styles";
import logo from "../../../assets/coffees/american.png";
import { CoffeeCartCard } from "../CoffeeCartCard";

export function Success() {
  return (
    <DetailsContainer>
      <TitleText>Cafés Selecionados</TitleText>
      <SuccessContainer>
      <CoffeeCartCard />
      <CoffeeCartCard />
      <CoffeeCartCard />
      </SuccessContainer>
    </DetailsContainer>
  );
}
