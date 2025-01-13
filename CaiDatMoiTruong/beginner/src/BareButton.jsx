import React from 'react'

class BareButton extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick(value) {
    console.log(value)
  }
  render() {
    // const handleClick = (value) => () => {
    //   console.log(value)
    // }
    return (
      <div>
        <button onClick={this.handleClick.bind(this, 'add')}>Add</button>
        <button onClick={this.handleClick.bind(this, 'Delete')}>Delete</button>
        <button onClick={this.handleClick.bind(this, 'Edit')}>Edit</button>
      </div>
    )
  }
}

export default BareButton
