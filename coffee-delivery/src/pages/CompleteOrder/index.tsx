import { MapPin } from "phosphor-react";
import { CompleteOrderContainer, Title } from "./styles";
import { DeliveryForm, DeliveryFormProps } from "./CartItem/CoffeeForm";


export interface Props {
    address: DeliveryFormProps["address"];
    setAddress: DeliveryFormProps["setAddress"];
}

export function CompleteOrderPage(props: Props){
    return(
        <CompleteOrderContainer>
        <Title>Complete seu pedido</Title>
        <DeliveryForm address={props.address} setAddress={props.setAddress} />
        </CompleteOrderContainer>
    )
}
