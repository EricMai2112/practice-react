import React from 'react'
import { ContainerExtends } from './Cart.style'

export function Button({ className }) {
  return (
    <div className={className}>
      <button>Click me!</button>
    </div>
  )
}

export default function Cart() {
  return (
    <ContainerExtends>
      <Button blue />
    </ContainerExtends>
  )
}
