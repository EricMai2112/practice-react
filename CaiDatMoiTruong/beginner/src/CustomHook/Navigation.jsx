import React from 'react'
import useUser from './useUser'

export default function Navigation() {
  const name = useUser()

  return <div>Navigation {name?.name}</div>
}
