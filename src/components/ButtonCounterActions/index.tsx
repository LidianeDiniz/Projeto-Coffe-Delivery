import { Minus, Plus } from 'phosphor-react'
import { ButtoncounterContainer, IconAdd } from './styles'

export interface ButtonCounterActionsProps {
  onIncrement: () => void
  onDecrement: () => void
  quantity: number
}

export function ButtonCounterActions({
  onIncrement,
  onDecrement,
  quantity,
}: ButtonCounterActionsProps) {
  return (
    <ButtoncounterContainer>
      <IconAdd onClick={onDecrement} disabled={quantity <= 1}>
        <Minus size={16} weight="bold" />
      </IconAdd>
      <input type="number" value={quantity} />

      <IconAdd onClick={onIncrement}>
        <Plus size={16} weight="bold" />
      </IconAdd>
    </ButtoncounterContainer>
  )
}
