import React, { Component } from 'react'

export class Button extends Component {
  handleClick = (event) => {
    console.log(event.target)
  }
  render() {
    return (
      <button className='btn' onClick={this.handleClick}>
        Button
      </button>
    )
  }
}

class YellowButton extends Button {
  render() {
    return (
      <button className='btn btn-yellow' onClick={this.handleClick}>
        Yellow Button
      </button>
    )
  }
}

export class Inheritance extends Component {
  render() {
    return (
      <div>
        Inheritance
        <Button />
        <YellowButton />
      </div>
    )
  }
}

export default Inheritance

//Không nên sử dụng và đừng bao giờ sử dụng kế thừa như này
