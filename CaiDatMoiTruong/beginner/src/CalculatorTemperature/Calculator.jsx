import React, { Component } from 'react'
import InputTemperature from './InputTemperature'
import BoilingVerdict from './BoilingVerdict'

const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) / 1.8
}

const toFahrenheit = (celsius) => {
  return celsius * 1.8 + 32
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

const tryConvert = (temperature, convertFunc) => {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }

  let output = convertFunc(input)

  output = Math.round(output * 1000) / 1000

  return String(output)
}

export class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      temperator: '',
      scale: 'c'
    }
  }

  handleChange = (scale) => (value) => {
    this.setState({
      temperator: value,
      scale
    })
  }
  render() {
    const { scale, temperator } = this.state
    const celsius = scale === 'f' ? tryConvert(temperator, toCelsius) : temperator

    const fahrenheit = scale === 'c' ? tryConvert(temperator, toFahrenheit) : temperator

    return (
      <div>
        <InputTemperature title={scaleNames.c} temperature={celsius} onTemperatureChange={this.handleChange('c')} />
        <InputTemperature title={scaleNames.f} temperature={fahrenheit} onTemperatureChange={this.handleChange('f')} />
        <BoilingVerdict celsius={celsius} />
      </div>
    )
  }
}

export default Calculator
