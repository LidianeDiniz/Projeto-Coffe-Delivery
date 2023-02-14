import {
  IconContainer,
  OrderInfoContainer,
  SubtitleText,
  SuccessContainer,
  SuccessDetailsContainer,
  TextIcon,
  TitleText,
} from "./styles";
import Illustration from "../../assets/Illustration.png";
import { MapPin, Timer, CurrencyDollar } from "phosphor-react";

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <TitleText>Uhu! Pedido confirmado.</TitleText>

        <SubtitleText>
          {" "}
          Agora é só aguardar que logo o café chegará até você.
        </SubtitleText>
      </div>

      <SuccessDetailsContainer>
        <OrderInfoContainer>
          
          <TextIcon>
          <IconContainer className="IconMap">
            <MapPin size={16} />
          </IconContainer>
          Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS
          </TextIcon>

          <TextIcon >
            <IconContainer className="IconTimer" >
              <Timer size={16} />
            </IconContainer>
            Previsão de entrega 20 min - 30 min
          </TextIcon>

          <TextIcon>
            <IconContainer className="IconCurrency">
              <CurrencyDollar size={16} />
            </IconContainer>
            Pagamento na entrega Cartão de Crédito
          </TextIcon>
        </OrderInfoContainer>
        <img src={Illustration} alt="" />
      </SuccessDetailsContainer>
    </SuccessContainer>
  );
}
