import { HeaderContainer, HeaderButton, HeaderCardsContainer } from "./styles";
import logoCoffeImg from "../../assets/logo-coffe-delivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
        <img src={logoCoffeImg} alt="" />

      <HeaderCardsContainer>

        <HeaderButton variant="purple">
          <MapPin size={22} weight="fill" />
          Porto Alegre, Rs
        </HeaderButton>

        <HeaderButton variant="yellow">
          <ShoppingCart size={22} weight="fill" />
        </HeaderButton>
        
      </HeaderCardsContainer>
    </HeaderContainer>
  );
}
