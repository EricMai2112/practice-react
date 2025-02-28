import React from 'react'
import styles from './title.module.scss'

type TitleProps = {
  address: {
    street: string
  }
  handleClickTitle: (value: any) => void
}

function Title(props: TitleProps) {
  console.log(props)
  return <h1 className={styles.title}>To do list Typescript</h1>
}

function equal(prevProps: TitleProps, nextProps: TitleProps) {
  if ((prevProps.address.street = nextProps.address.street)) return true
  return false
}

export default React.memo(Title)
