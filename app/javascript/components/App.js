import React from "react"
import PropTypes from "prop-types"
import axios from "axios";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoggedIn: false, user: {} };
  };

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  };

  handleLogout = (data) => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  };

  loginStatus = () => {
    axios.get('http://localhost:3000/logged_in', {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  componentDidMount() {
    this.loginStatus()
  }
  
  render () {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App
