import {  CardPrice, CoffeeCardContainer, CounterActions, Description, Name, Tags, } from "./styled";
import arabic from '../../../../../public/arabic.png';
import { ButtonCounterActions } from "../../../../components/ButtonCounterActions";

export function CoffeeCards(){
    return(
        <CoffeeCardContainer>
            <img src={arabic} alt="" />
           <Tags>
           <span>Tradicional</span>
           <span>Com Leite</span>
           <span>Gealado</span>
           </Tags>

           <Name>Expresso Tardicional</Name>
           <Description>Uma dose de café expresso com o dobro de leite e espuma cremosa</Description>
           <CardPrice>
            <div>
                <span>R$</span>
                <strong>9,90</strong>
            </div>
           </CardPrice>

           <CounterActions>
          <ButtonCounterActions/>
           
            
           </CounterActions>

            

        </CoffeeCardContainer>
    )
}