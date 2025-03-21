import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const { product } = this.props
    return (
      <div className='product-item'>
        {product.name} - {product.avatar}
      </div>
    )
  }
}
