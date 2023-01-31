import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { DefaultLayout } from './layouts/DefaultLayout';
import { CompleteOrderPage} from './pages/CompleteOrder';
import { DeliveryFormProps } from './pages/CompleteOrder/CartItem/CoffeeForm';

interface RouterProps {
  address: DeliveryFormProps["address"];
  setAddress: DeliveryFormProps["setAddress"];
}

export function Router({ address, setAddress }: RouterProps) {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/complete-order" element={<CompleteOrderPage address={address} setAddress={setAddress} />} />
      </Route>
    </Routes>
  );
}
