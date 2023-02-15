import { HeaderContainer, HeaderButton, HeaderCardsContainer } from "./styles";
import logoCoffeImg from "../../assets/logo-coffe-delivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCarts } from '../../hooks/useCarts';

export function Header() {
  const {CartQuantity} = useCarts()
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
            {CartQuantity >= 1 && <span>{CartQuantity}</span>}
            <ShoppingCart size={22} weight="fill" />
          </HeaderButton>
        </NavLink>
      </HeaderCardsContainer>
    </HeaderContainer>
  );
}
