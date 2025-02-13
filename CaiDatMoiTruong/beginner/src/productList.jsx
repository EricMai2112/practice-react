import React from 'react'
import styles from './product.module.css'

export default function productList() {
  return (
    <div className='container'>
      productList
      <div className={styles.productList}>
        <div className={styles.productItem}>item</div>
        <div className={styles.productItem}>item</div>
        <div className={styles.productItem}>item</div>
        <div className={styles.productItem}>item</div>
        <div className={styles.productItem}>item</div>
      </div>
    </div>
  )
}
