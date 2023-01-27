import { CoffeeListContainer, CoffeeList, CoffeeTitle } from './styles';
import { coffees } from "../../../../data/coffees";
import { CoffeeCards } from "../CoffeeCards";
s


export function CoffeList(){
    return(
       
        <CoffeeListContainer>
        <CoffeeTitle>
        Nossos cafés
        </CoffeeTitle>

        <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCards key={coffee.id} coffee={coffee} />
        ))}
            
        </CoffeeList>

       
       
        </CoffeeListContainer>


       
    )
}