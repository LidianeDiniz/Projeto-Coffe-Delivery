import { CoffeeListContainer, CoffeeListImage, CoffeeTitle } from './styles'
import { CoffeeCardsItem } from '../CoffeeCards'
import coffees from '../../../../data/coffees'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <CoffeeTitle>Nossos cafés</CoffeeTitle>

      <CoffeeListImage>
        {coffees.map((coffee) => (
          <CoffeeCardsItem key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeListImage>
    </CoffeeListContainer>
  )
}
