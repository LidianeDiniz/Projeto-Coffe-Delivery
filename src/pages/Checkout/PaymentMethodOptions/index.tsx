import { PaymentMethodOptionsContainer } from "./styles";
import { Bank, CreditCard, Money } from "phosphor-react";
import { useForm } from "react-hook-form";
import { PaymentMethod } from "../PaymentMethod";

export const paymentMethods = {
  credit: {
    label: "Cartão de Crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de Débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};

export function PaymentMethodOptions() {
  const { register } = useForm();

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethod
          id={key}
          key={label}
          icon={icon}
          label={label}
          value={key}
          {...register("paymentMethod")}
        />
      ))}
    </PaymentMethodOptionsContainer>
  );
}
