import React from 'react'

class LoginButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Login</button>
  }
}

class LogoutButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Logout</button>
  }
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    const { isLoggedIn } = this.state
    let button

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogout} />
    } else {
      button = <LoginButton onClick={this.handleLogin} />
    }
    return <div className='login-control'>{button}</div>
  }
}

export default LoginControl
