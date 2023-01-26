import { CoffeeListContainer, CoffeeList, CoffeeTitle } from './styles';
import { CoffeeCards } from '../CoffeeCards';

export function CoffeList(){
    return(
       
        <CoffeeListContainer>
        <CoffeeTitle>
        Nossos cafés
        </CoffeeTitle>

        <CoffeeList>
            <CoffeeCards />
            <CoffeeCards />
            <CoffeeCards />
            <CoffeeCards />
            <CoffeeCards />
            <CoffeeCards />
            <CoffeeCards />
            <CoffeeCards />
        </CoffeeList>

       
       
        </CoffeeListContainer>


       
    )
}