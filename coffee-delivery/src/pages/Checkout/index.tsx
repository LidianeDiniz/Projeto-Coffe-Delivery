import { CurrencyDollar, MapPin, MapPinLine } from "phosphor-react";
import { CompleteOrderContainer, SectionTitleContainer, Title, AddressFormContainer, PaymentMethodOptionsContainer } from './styles';
import { CartForm } from "./CartForm";
import { HeaderForm } from "./HeaderForm";


interface SectionTitleProps {
    subtitle: void;
  }

export function CompleteOrderPage(){
    return(
           
        <CompleteOrderContainer>

        <SectionTitleContainer>
        <Title>Complete seu pedido</Title>
        </SectionTitleContainer>

       
        
        <CartForm/>
        <AddressFormContainer />
      
      <PaymentMethodOptionsContainer/>
        
        </CompleteOrderContainer>
     
    )
}