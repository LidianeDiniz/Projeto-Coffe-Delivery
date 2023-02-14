import { CartForm } from "./CartForm";
import { CompleteOrderContainer } from "./styles";
import { CoffeCardCheckout } from './CoffeCardCheckout/index';

export function CompleteOrderPage() {
  return (
    <CompleteOrderContainer>
      <CartForm />
      <CoffeCardCheckout />
    </CompleteOrderContainer>
  );
}
