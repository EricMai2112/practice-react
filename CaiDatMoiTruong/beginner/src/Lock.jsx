import React from 'react'

const lists = ['BMW', 'Toyota', 'Honda']

const fetchApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lists)
    }, 1000)
  })
}

export default class Lock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      },
      lists: []
    }
  }

  componentDidMount() {
    const seconds = document.getElementById('seconds')

    fetchApi().then((res) =>
      this.setState((prevStage) => ({
        ...prevStage,
        lists: res
      }))
    )
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
    console.log(this.state)
    return (
      <div>
        <h1>Hello World</h1>
        <h1>Current Time: {this.state.time.created}</h1>
        <h1 id='seconds'>Seconds: {this.state.seconds.created}</h1>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    )
  }
}
