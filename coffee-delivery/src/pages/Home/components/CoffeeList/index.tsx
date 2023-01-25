import { CoffeeListContainer, CoffeeList, CoffeeTitle } from './styles';
import coffeeAmerican from '../../../../../public/american.png'

export function CoffeList(){
    return(
        <>
        <CoffeeListContainer>
        <CoffeeTitle>
        Nossos cafés
        </CoffeeTitle>

        <CoffeeList>
        <img src={coffeeAmerican} alt="" />
        <img src={coffeeAmerican} alt="" />
        <img src={coffeeAmerican} alt="" />
        <img src={coffeeAmerican} alt="" />
        <img src={coffeeAmerican} alt="" />
        <img src={coffeeAmerican} alt="" />
        <img src={coffeeAmerican} alt="" />
        <img src={coffeeAmerican} alt="" />
        </CoffeeList>   

       
         <CoffeeList>
        </CoffeeList>       
          

         <CoffeeList>
        </CoffeeList>           
        
         <CoffeeList>
        </CoffeeList>           
        

        
        </CoffeeListContainer>


        </>
    )
}