import { CurrencyDollar, MapPin, MapPinLine } from "phosphor-react";
import { CompleteOrderContainer, SectionTitleContainer, Title, AddressFormContainer, PaymentMethodOptionsContainer } from './styles';
import { CartForm } from "./CartForm";


interface SectionTitleProps {
    subtitle: void;
  }

export function CompleteOrderPage(){
    return(
           
        <CompleteOrderContainer>
        <Title>Complete seu pedido</Title>
         
        <SectionTitleContainer>
            <h2>Endereço de Entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
            <MapPinLine size={22} weight="thin" />
        
        </SectionTitleContainer>
        <CartForm/>

        <AddressFormContainer />
      
      <PaymentMethodOptionsContainer/>
        
        </CompleteOrderContainer>
     
    )
}