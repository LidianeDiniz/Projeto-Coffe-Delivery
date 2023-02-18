import { useContext } from 'react'
import { CartContext } from '../CartContext'

export function useCarts() {
  const context = useContext(CartContext)
  return context
}
