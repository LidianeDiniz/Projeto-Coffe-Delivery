import { CartForm } from "./CartForm";
import { Success } from "./Success";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrderPage() {
  return (
    <CompleteOrderContainer>
      <CartForm />
      <Success />
    </CompleteOrderContainer>
  );
}
