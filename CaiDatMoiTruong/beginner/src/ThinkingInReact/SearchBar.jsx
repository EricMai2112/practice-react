import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
    return (
      <form action=''>
        <input type='text' name='' id='' placeholder='Seach...' />
        <div>
          <input type='checkbox' name='' id='' />
          Only show products in stock
        </div>
      </form>
    )
  }
}

export default SearchBar
