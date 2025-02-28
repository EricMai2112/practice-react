import React from 'react'
import { debug, log } from './constant'

export interface ExtraInforType {
  debug: boolean
  log: (value: any) => void
}

export default function connect<P>(infectedProps: P) {
  return function <T>(Component: React.ComponentType<T & P>) {
    return function (props: Omit<T, keyof P>) {
      return <Component {...(props as T & {})} {...infectedProps} />
    }
  }
}
