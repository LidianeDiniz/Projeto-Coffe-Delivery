import { CompleteOrderContainer, SectionTitleContainer, Title, AddressFormContainer, PaymentMethodOptionsContainer } from './styles';
import { CartForm } from "./CartForm";
import { PaymentMethodContainer } from './PaymentMethod/styles';
import { PaymentMethodOptions } from './PaymentMethodOptions/index';




export function CompleteOrderPage(){
    return(
           
        <CompleteOrderContainer>

        <SectionTitleContainer>
        <Title>Complete seu pedido</Title>
        </SectionTitleContainer>

       
        
        <CartForm/>
        <AddressFormContainer />
        
      <PaymentMethodContainer>
        <PaymentMethodOptions/>
      </PaymentMethodContainer>
        
        </CompleteOrderContainer>
     
    )
}