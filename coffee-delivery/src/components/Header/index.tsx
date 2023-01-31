import { HeaderContainer, HeaderButton, HeaderCardsContainer } from "./styles";
import logoCoffeImg from "../../assets/logo-coffe-delivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeImg} alt="" />
      </NavLink>
      
      <HeaderCardsContainer>
        <HeaderButton variant="purple">
          <MapPin size={22} weight="fill" />
          Porto Alegre, Rs
        </HeaderButton>

        <NavLink to="/completeOrder">
          <HeaderButton variant="yellow">
            <ShoppingCart size={22} weight="fill" />
          </HeaderButton>
        </NavLink>
      </HeaderCardsContainer>
    </HeaderContainer>
  );
}
