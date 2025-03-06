import React, { useRef } from 'react'
import styles from './title.module.scss'

type TitleProps = {
  address: {
    street: string
  }
  handleClickTitle: (value: any) => void
}

function Title(props: TitleProps) {
  const h1Ref = useRef<HTMLHeadingElement>(null)

  const clickH1Ref = () => {
    console.log(h1Ref)
    if (h1Ref.current) {
      h1Ref.current.style.color = 'red'
    }
  }

  return (
    <h1 className={styles.title} ref={h1Ref} onClick={clickH1Ref}>
      To do list Typescript
    </h1>
  )
}

function equal(prevProps: TitleProps, nextProps: TitleProps) {
  if ((prevProps.address.street = nextProps.address.street)) return true
  return false
}

export default React.memo(Title)
