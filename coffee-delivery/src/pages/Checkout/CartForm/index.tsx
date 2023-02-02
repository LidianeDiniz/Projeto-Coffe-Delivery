import { MapPinLine } from "phosphor-react";
import { useForm } from "react-hook-form";
import { AdressContainer } from "./styled";

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
     
  );
}
