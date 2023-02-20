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

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

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
  const { register, formState } = useFormContext<Inputs>()
  const { errors } = formState as unknown as ErrorsType
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
          <Input
            className="street"
            type="text"
            required
            placeholder="Rua"
            {...register('street', { required: true })}
            error={errors.street?.message}
          />

          <Input
            type="number"
            className="number"
            required
            placeholder="Número"
            {...register('number', { required: true })}
            error={errors.number?.message}
          />
          <Input
            className="complement"
            placeholder="Complemento "
            {...register('complement')}
            error={errors.complement?.message}
            rightText="Opiconal"
          />

          <Input
            type="text"
            placeholder="Bairro"
            {...register('district')}
            error={errors.district?.message}
          />

          <Input
            type="text"
            required
            placeholder="Cidade"
            {...register('city', { required: true })}
            error={errors.city?.message}
          />
          <Input
            type="text"
            required
            placeholder="UF"
            maxLength={2}
            {...register('uf', { required: true })}
            error={errors.uf?.message}
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
