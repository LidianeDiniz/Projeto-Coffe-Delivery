import {
  IconContainer,
  OrderInfoContainer,
  SuccessContainer,
  SuccessDetailsContainer,
  TitleText,
  TextIcon,
  SubtitleTextIcon,
  SubtitleText,
} from './styles'
import Illustration from '../../assets/Illustration.png'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <TitleText>Uhu! Pedido confirmado.</TitleText>

        <SubtitleText>
          {' '}
          Agora é só aguardar que logo o café chegará até você.
        </SubtitleText>
      </div>

      <SuccessDetailsContainer>
        <OrderInfoContainer>
          <TextIcon>
            <IconContainer className="IconMap">
              <MapPin size={14} />
            </IconContainer>
            <SubtitleTextIcon>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              <br />
              Farrapos - Porto Alegre, RS
            </SubtitleTextIcon>
          </TextIcon>

          <TextIcon>
            <IconContainer className="IconTimer">
              <Timer size={14} />
            </IconContainer>
            <SubtitleTextIcon>
              {' '}
              Previsão de entrega{' '}
              <strong>
                <br /> 20 min - 30 min
              </strong>{' '}
            </SubtitleTextIcon>
          </TextIcon>

          <TextIcon>
            <IconContainer className="IconCurrency">
              <CurrencyDollar size={14} />
            </IconContainer>
            <SubtitleTextIcon>
              {' '}
              Pagamento na entrega <br /> <strong>
                Cartão de Crédito
              </strong>{' '}
            </SubtitleTextIcon>
          </TextIcon>
        </OrderInfoContainer>
        <img src={Illustration} alt="" />
      </SuccessDetailsContainer>
    </SuccessContainer>
  )
}
