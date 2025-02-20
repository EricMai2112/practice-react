import React, { useEffect, useState } from 'react'
import { getUser } from './api'

export default function useUser() {
  const [name, setName] = useState()

  useEffect(() => {
    getUser().then((res) => {
      setName(res.data)
    })
  }, [])
  return name
}
