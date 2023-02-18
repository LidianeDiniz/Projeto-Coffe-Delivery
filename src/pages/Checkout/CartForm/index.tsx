import { useFormContext } from 'react-hook-form'
import {
  AdressContainer,
  AdressHeaderContainer,
  CartFormContainer,
  Grid,
  PaymentContainer,
  Title,
} from './styles'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { PaymentMethodOptions } from '../PaymentMethodOptions/index'
import { HeaderForm } from '../HeaderForm'
import { Input } from '../../../components/Input'

interface Inputs {
  cep: string
  street: string
  number: number
  complement: string
  city: string
  uf: string
  district: string
}

export function CartForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Inputs>()
  return (
    <CartFormContainer>
      <Title>Complete seu pedido</Title>
      <Grid>
        <AdressHeaderContainer>
          <HeaderForm
            title="Endereço de entrega"
            description="Informe o endereço onde deseja receber o seu pedido"
            icon={<MapPinLine size={22} color="#C47F17" />}
          />
        </AdressHeaderContainer>

        <AdressContainer>
          <Input
            type="text"
            placeholder="CEP"
            {...register('cep')}
            error={errors.cep?.message}
            className="cep"
          />
          <input
            className="street"
            type="text"
            required
            placeholder="Rua"
            {...register('street', { required: true })}
          />

          <input
            type="number"
            required
            placeholder="Número"
            {...register('number', { required: true })}
          />
          <input
            className="complement"
            placeholder="Complemento "
            {...register('complement')}
          />

          <Input
            type="text"
            placeholder="Bairro"
            {...register('district')}
            error={errors.district?.message}
          />

          <input
            type="text"
            required
            placeholder="Cidade"
            {...register('city', { required: true })}
          />
          <input
            type="text"
            required
            placeholder="UF"
            maxLength={2}
            {...register('uf', { required: true })}
          />
        </AdressContainer>
      </Grid>
      <PaymentContainer>
        <HeaderForm
          title="Pagamento"
          description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={24} color={'#8047F8'} />}
        />

        <PaymentMethodOptions />
      </PaymentContainer>
    </CartFormContainer>
  )
}
