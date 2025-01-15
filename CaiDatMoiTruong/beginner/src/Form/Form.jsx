import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      address: '',
      marriage: 'Mango',
      food: false
    }
  }

  handleChange = (event) => {
    const { name } = event.target
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  // handleTextareaChange = (event) => {
  //   this.setState({
  //     textareaValue: event.target.value
  //   })
  // }

  // handleSelectChange = (event) => {
  //   this.setState({
  //     selectedOption: event.target.value
  //   })
  // }

  // handleCheckboxChange = (event) => {
  //   console.log(event.target.checked)
  //   this.setState({
  //     checkboxValue: event.target.checked
  //   })
  // }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
          </label>

          <input type='checkbox' name='marriage' checked={this.state.marriage} onChange={this.handleChange} />

          <textarea value={this.state.address} name='address' onChange={this.handleChange} />

          <select onChange={this.handleChange} value={this.state.food} name='food'>
            <option value='Mango'>Mango</option>
            <option value='Apple'>Apple</option>
            <option value='Banana'>Banana</option>
          </select>

          <input type='submit' name='submit' id='' />
        </form>
      </div>
    )
  }
}

export default Form
