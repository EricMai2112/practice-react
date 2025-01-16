import React, { Component, createRef } from 'react'

export class UncontrolledComponents extends Component {
  constructor(props) {
    super(props)
    this.input = createRef()
    this.fileInput = createRef()

    this.state = {
      selectedFile: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.input.current.value)

    const formData = new FormData()
    formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)

    console.log(this.state.selectedFile)
  }

  handleFile = (event) => {
    console.log(event.target.files[0])
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='' id='' ref={this.input} />
          <input type='file' name='avatar' ref={this.fileInput} onChange={this.handleFile} />
          <input type='submit' name='' id='' />
        </form>
      </div>
    )
  }
}

export default UncontrolledComponents
