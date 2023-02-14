import { ButtonContainer, ConfirmationSectionContainer, Text } from "./styles";

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <Text>Total de itens</Text>
        <Text> R$ 9.90</Text>
      </div>

      <div>
        <Text>Entrega</Text>
        <Text> R$ 3.50</Text>
      </div>

      <div className="sumResult">
        <Text>Total</Text>
        <Text> R$ 33.20</Text>
      </div>

      <ButtonContainer>confirmar pedido</ButtonContainer>
    </ConfirmationSectionContainer>
  );
}
