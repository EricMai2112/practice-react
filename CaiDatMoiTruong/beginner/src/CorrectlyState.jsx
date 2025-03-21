import React, { Component } from 'react'

const fetchComments = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(['A', 'B', 'C'])
    }, 1000)
  })

export class CorrectlyState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      comments: []
    }
  }

  componentDidMount() {
    console.log('did mount')
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))

    // fetchComments().then((res) => {
    //     this.setState({
    //         comments: res
    //     })
    //   })

    fetchComments().then((res) => {
      this.setState((prevStage) => ({
        ...prevStage,
        comments: res
      }))
    })
  }

  render() {
    console.log(this.state)
    return <div>CorrectlyState. Count: {this.state.count}</div>
  }
}

export default CorrectlyState
