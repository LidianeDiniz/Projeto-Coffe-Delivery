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
import { useLocation } from 'react-router-dom'
import { OrderData } from '../Checkout'
import { paymentMethods } from '../Checkout/PaymentMethodOptions'

interface LocationType {
  state: OrderData
}

export function Success() {
  const { state } = useLocation() as unknown as LocationType

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
              Entrega em
              <strong>
                {' '}
                <strong>{state.street}</strong>, {state.number}
                <br />
                {state.district} - {state.city}, {state.uf}
              </strong>
              <br />
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
              Pagamento na entrega <br />{' '}
              <strong>{paymentMethods[state.paymentMethod].label}</strong>
            </SubtitleTextIcon>
          </TextIcon>
        </OrderInfoContainer>
        <img src={Illustration} alt="" />
      </SuccessDetailsContainer>
    </SuccessContainer>
  )
}
