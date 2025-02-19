import React, { Component } from 'react'

export default class UserClassComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: 'Alex',
      age: 24
    }
  }

  increaseAge = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1
    }))
  }
  render() {
    return (
      <div>
        <h1>User class component</h1>
        <ul>
          <li>First name: {this.state.firstName}</li>
          <li>First name: {this.state.age}</li>
        </ul>
        <button onClick={this.increaseAge}>Increase Age</button>
      </div>
    )
  }
}
