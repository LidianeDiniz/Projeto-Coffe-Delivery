import { CoffeeListContainer, CoffeeListImage, CoffeeTitle } from "./styles";
import { CoffeeCards } from "../CoffeeCards";
import coffees from "../../../../data/coffees";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <CoffeeTitle>Nossos cafés</CoffeeTitle>

      <CoffeeListImage>
               
      {coffees.map((coffee) => (
          <CoffeeCards key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeListImage>
    </CoffeeListContainer>
  );
}
