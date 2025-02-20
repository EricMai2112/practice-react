import React from 'react'
import useUser from './useUser'

export default function Rename() {
  const name = useUser()

  return <div>Rename {name?.name}</div>
}
