import { Trash, CurrencyDollar } from 'phosphor-react'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
  TitleDescriptionCoffee,
} from './styles'
import { ButtonCounterActions } from '../../../components/ButtonCounterActions/index'
import { useCarts } from '../../../hooks/useCarts'
import { CartItem } from '../../../CartContext'
import { useState } from 'react'
import { current } from 'immer'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { removeCartItem } = useCarts()

  const { modifyCartItem } = useCarts()

  function handleIncrement() {
    modifyCartItem(coffee.id, 'increment')
  }

  function handleDecrement() {
    modifyCartItem(coffee.id, 'decrement')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
    alert(
      `Poxa, você removeu ${coffee.quantity} ${coffee.name} do seu carrinho!`,
    )
  }
  function formatMoney(value: number) {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
    })
  }

  const coffeeTotal = coffee.price * coffee.quantity
  const formattedCoffeePrice = formatMoney(coffeeTotal)
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/${coffee.image}`} alt="" />
        <div>
          <TitleDescriptionCoffee>{coffee.name}</TitleDescriptionCoffee>
          <ActionsContainer>
            <ButtonCounterActions
              onDecrement={handleDecrement}
              onIncrement={handleIncrement}
              quantity={coffee.quantity}
            />
            <RemoveButton type="button" onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedCoffeePrice}</p>
    </CoffeeCartCardContainer>
  )
}
