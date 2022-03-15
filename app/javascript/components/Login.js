import React from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import PropTypes from "prop-types"
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: ''
    };
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const {username, email, password} = this.state
    let user = { 
      username: username,
      email: email,
      password: password
    }
    axios.post('http://localhost:3000/login', {user}, {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          this.props.handleLogin(response.data)
          this.redirect()
        } else {
          this.setState({ errors: response.data.errors })
        }
      })
      .catch(error => console.log('api errors:', error))
  };

  redirect = () => {
    this.props.history.push('/')
  }

  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.localeCompare(error => {
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  }

  render () {
    const {username, email, password} = this.state
    return (
      <React.Fragment>
        <div>
          <h1>Log In</h1>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="username" type="text" name="username" value={username} onChange={this.handleChange} />  
            <input placeholder="email" type="text" name="email" value={email} onChange={this.handleChange} />  
            <input placeholder="password" type="password" name="password" value={password} onChange={this.handleChange} />
            <button placeholder="submit" type="submit">Log In</button>
            <div>
              or <Link to='/signup'>Sign Up</Link>  
            </div>  
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login
