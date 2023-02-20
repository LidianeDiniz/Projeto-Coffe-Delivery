import { CartForm } from './CartForm'
import { CompleteOrderContainer } from './styles'
import { CoffeCardCheckout } from './CoffeCardCheckout/index'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useCarts } from '../../hooks/useCarts'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a Rua '),
  number: zod.string().min(1, 'Informe o número '),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe O Bairro '),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(2, 'Informe o Estado '),

  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe a forma de pagamento' }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function CompleteOrderPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()
  const { cleanCart } = useCarts()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/Success', {
      state: data,
    })
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CartForm />
        <CoffeCardCheckout />
      </CompleteOrderContainer>
    </FormProvider>
  )
}
function cleanCart() {
  throw new Error('Function not implemented.')
}
