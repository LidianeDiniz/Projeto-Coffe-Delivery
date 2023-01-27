import { CoffeeListContainer, CoffeeList, CoffeeTitle } from "./styles";
import { coffees } from "../../../../data/coffees";
import { CoffeeCards } from "../CoffeeCards";

export function CoffeList() {
  return (
    <CoffeeListContainer>
      <CoffeeTitle>Nossos cafés</CoffeeTitle>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCards coffee={coffee} key={coffee.id} />
        ))}
      </CoffeeList>
    </CoffeeListContainer>
  );
}
