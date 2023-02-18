import { useCarts } from '../../../hooks/useCarts'
import { ButtonContainer, ConfirmationSectionContainer, Text } from './styles'

export function ConfirmationSection() {
  function formatMoney(value: number) {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
    })
  }

  const { cartItemsTotal, CartQuantity } = useCarts()
  const deliveryPrice = 3.5
  const cartTotal = deliveryPrice + cartItemsTotal
  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(deliveryPrice)

  return (
    <ConfirmationSectionContainer>
      <div>
        <Text>Total de itens</Text>
        <Text> R$ {formattedCartTotal}</Text>
      </div>

      <div>
        <Text>Entrega</Text>
        <Text>R$ {formattedDeliveryPrice}</Text>
      </div>

      <div className="sumResult">
        <Text>Total</Text>
        <Text>R$ {formattedItemsTotal}</Text>
      </div>

      <ButtonContainer disabled={CartQuantity <= 0} type="submit">
        confirmar pedido{' '}
      </ButtonContainer>
    </ConfirmationSectionContainer>
  )
}
