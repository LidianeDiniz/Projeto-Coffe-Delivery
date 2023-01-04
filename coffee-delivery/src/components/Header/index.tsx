import { HeaderContainer, HeaderContainerButton, HeaderButton } from './styles';
import logoCoffeImg from '../../assets/logo-coffe-delivery.svg'
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header (){
    return (
        <HeaderContainer>
            <div>
             <img src={logoCoffeImg} alt="" />
              <HeaderContainerButton>
                <HeaderButton>
                <MapPin size={22} weight='fill'/>
                Porto Alegre, Rs
                <ShoppingCart/>
                </HeaderButton>
                
                </HeaderContainerButton>  
           
            </div>
           

        </HeaderContainer>
    )
}