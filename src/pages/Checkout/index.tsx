import { CartForm } from './CartForm'
import { CompleteOrderContainer } from './styles'
import { CoffeCardCheckout } from './CoffeCardCheckout/index'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string(),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function CompleteOrderPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()
  const { cleanCart } = useCart()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/orderConfirmed', {
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
function useCart(): { cleanCart: any } {
  throw new Error('Function not implemented.')
}
