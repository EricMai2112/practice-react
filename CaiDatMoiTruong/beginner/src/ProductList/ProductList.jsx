import React, { Component } from 'react'
import ProductItem from './ProductItem'

class ProductList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productList: [
        {
          id: 0,
          name: 'Binard',
          avatar: 'avatar0'
        },
        {
          id: 1,
          name: 'Eric',
          avatar: 'avatar1'
        },
        {
          id: 2,
          name: 'Mai',
          avatar: 'avatar2'
        }
      ]
    }
  }

  sortItem = () => {
    this.setState((prevState) => ({
      productList: prevState.productList.sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })
    }))
  }

  addItem = () => {
    this.setState((prevState) => ({
      productList: [
        {
          id: 3,
          name: 'Cong Thanh',
          avatar: 'new_avatar'
        },
        ...prevState.productList
      ]
    }))
  }
  render() {
    return (
      <div>
        <div>ProductList</div>
        <button onClick={this.sortItem}>Sort</button>
        <button onClick={this.addItem}>Add</button>
        <div className='product-list'>
          {this.state.productList.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default ProductList
