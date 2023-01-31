import { MapPinLine } from "phosphor-react";
import  {AdressContainer}  from "./styled";
import React, { useState } from "react";


export interface Address {
    name: string;
    street: string;
    number: string;
  }
  
  export interface DeliveryFormProps {
    address: Address;
    setAddress: React.Dispatch<React.SetStateAction<Address>>;
  }
  
 
    

  export const DeliveryForm: React.FC<DeliveryFormProps> = () => {
     const [address, setAddress] = useState({
      name: "",
      street: "",
      number: "",
      neighborhood: ""
    });
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setAddress({
      ...address,
      [event.currentTarget.name]: event.currentTarget.value
    });
};
  

  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(address);
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={address.name}
          onChange={handleChange}
          />
      </div>
      <div>
        <label htmlFor="street">Rua:</label>
        <input
          type="text"
          id="street"
          name="street"
          value={address.street}
          onChange={handleChange}
          />
      </div>
      <div>
        <label htmlFor="number">Número:</label>
        <input
          type="text"
          id="number"
          name="number"
          value={address.number}
          onChange={handleChange}
          />  
      </div>
      <div>
        <label htmlFor="neighborhood">Bairro:</label>
        <input
          type="text"
          id="neighborhood"
          name="neighborhood"
          value={address.neighborhood}
          onChange={handleChange}
          />
      </div>
      
      <button type="submit">Completar Pedido</button>
    </form>
  );
};




      
