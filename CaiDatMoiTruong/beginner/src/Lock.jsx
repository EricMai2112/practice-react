import React from 'react'

export default class Lock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
    }
  }

  getTime = () => {
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
    }
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h1>Current Time: {this.state.time}</h1>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    )
  }
}
