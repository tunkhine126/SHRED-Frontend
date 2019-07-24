import React, {Component} from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';

class Navigation extends Component {

  image = require('../images/ShredLogoPlain.png')

  handleLogin = (e) => {
    e.preventDefault()
    // console.log(e)
    if(e.target.username.value && e.target.password.value) {
      fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Accepts: 'application/json','Access-Control-Allow-Origin':'*'},
        body: JSON.stringify({user: {
          username: e.target.username.value,
          password: e.target.password.value
        } })
      })
      .then(res => res.json())
      .then( res => {
        console.log("your token:", res.jwt)
        if(res.jwt) {
          localStorage.setItem('token', res.jwt)
          localStorage.setItem('user_id', res.user.id)
          this.props.dispatch({type: "LOGIN_USER", user: res.user})
        }
      })
      .then(e.target.reset())
    }
  }

  render() {
    return(
      <div>
        <Navbar bg="light" expand="lg">
          <img
            src={this.image} alt="logo" className='navLogo'
            style={{
              alignSelf: 'center',
              height: 60,
              width: 60,
              borderWidth: 1,
            }}
            />
          <Navbar.Brand href="#home">SHRED</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
              {(this.props.user ? 
                <Button className="logoutButton" variant="primary" onClick={() => this.props.dispatch({type: 'LOGOUT_ACTION'})}>LOGOUT</Button>
              :
              <Form inline onSubmit={(e) => this.handleLogin(e)}>
                <Form.Group controlId="formLogin">
                  <Form.Label></Form.Label>
                    <FormControl name="username" type="username" placeholder="Enter username"/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label></Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                  <Button className="loginButton" variant="primary" type="submit">LOGIN</Button>
              </Form>)}
            </Navbar.Collapse>
          </Navbar>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.loggedIn
 })

export default connect(mapStateToProps)(Navigation);