import { useForm } from "react-hook-form";
import { AdressContainer, AdressHeaderContainer, Grid, PaymentContainer } from "./styles";
import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { HeaderForm } from "../HeaderForm";

interface Inputs {
  cep: string;
  street: string;
  number: number;
  complement: string;
  city: string;
  uf: string;
}

export function CartForm() {
  const { register } = useForm<Inputs>();
  return (

    <Grid>
      
      <AdressHeaderContainer>
      <HeaderForm
          title="Endereço de entrega"
          description="Informe o endereço onde deseja receber o seu pedido"
          icon={<MapPinLine size={22} color="#C47F17"/>}
        />     
      </AdressHeaderContainer>

    <AdressContainer>
    

      
      <input className="CEP"
        type="number"
        required
        placeholder="CEP"
        {...register("cep", { required: true })}
      />
      <input
      className="street"
        type="text"
        required
        placeholder="Rua"
        {...register("street", { required: true })}
      />

      <input
        type="number"
        required
        placeholder="Número"
        {...register("number", { required: true })}
      />
      <input
      className="complement"
        placeholder="Complemento " 
        {...register("complement")}
          
          
          />
      
      <input 
      type="text"
       placeholder="Bairro"
        {...register} 
        />

      <input
        type="text"
        required
        placeholder="Cidade"
        {...register("city", { required: true })}
      />
      <input
        type="text"
        required
        placeholder="UF"
        maxLength={2}
        {...register("uf", { required: true })}
      />
    
    </AdressContainer>

    <PaymentContainer>
    
    
        <HeaderForm 
         title="Pagamento"
         description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
         icon={<CurrencyDollar size={24} color={'#8047F8'} />}
        />
    </PaymentContainer>

    </Grid>

   
     
  );
}
