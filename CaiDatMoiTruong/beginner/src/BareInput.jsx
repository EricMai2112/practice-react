import React from 'react'
import PropTypes from 'prop-types'

class BareInput extends React.Component {
  render() {
    const { type: typeInput, ...res } = this.props
    return <input {...res} type={typeInput} />
  }
}

// function BareInput(props) {
//   const { type, ...res } = props
//   return <input {...res} />
// }

BareInput.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string
}

export default BareInput
