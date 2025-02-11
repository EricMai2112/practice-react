import React, { Component, Fragment } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export class ProductTable extends Component {
  render() {
    const { productList } = this.props
    let lastCategory = null

    // Su dung FOREACH================================
    const rows = []

    productList.forEach((productItem) => {
      if (productItem.category != lastCategory) {
        rows.push(<ProductCategoryRow key={productItem.category} category={productItem.category} />)
      }
      rows.push(<ProductRow key={productItem.name} product={productItem} />)
      lastCategory = productItem.category
    })

    //Su dung MAP================================
    // const rows = productList.map((productItem) => {
    //   if (productItem.category !== lastCategory) {
    //     lastCategory = productItem.category
    //     return (
    //       <Fragment key={productItem.name}>
    //         <ProductCategoryRow category={productItem.category} />
    //         <ProductRow product={productItem} />
    //       </Fragment>
    //     )
    //   }
    //   return <ProductRow key={productItem.name} product={productItem} />
    // })

    return (
      <table>
        <thead>
          <th>Name</th>
          <th>Price</th>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

export default ProductTable
