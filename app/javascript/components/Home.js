import React from "react"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"
class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <Link to='/login'>Log In</Link>
          <br></br>
          <Link to='/signup'>Sign Up</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Home
