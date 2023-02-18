import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { CompleteOrderPage } from './pages/Checkout/index'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Success } from './pages/Success'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
        <Route path="/Success" element={<Success />} />
      </Route>
    </Routes>
  )
}
