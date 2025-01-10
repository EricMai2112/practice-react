import React from 'react'

function welcome(props) {
  return <h1>{props.name}</h1>
}

class Welcome extends React.Component {
  render() {
    return (
      <h1>
        Hello {this.props.name} - {this.props.age}
      </h1>
    )
  }
}

export default Welcome
