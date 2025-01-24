import React, { Component } from 'react'

export class InputTemperature extends Component {
  handleChange = (event) => {
    this.props.onTemperatureChange(event.target.value)
  }
  render() {
    const { title, temperature } = this.props
    return (
      <fieldset>
        <legend>Enter temperature in {title}</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

export default InputTemperature
