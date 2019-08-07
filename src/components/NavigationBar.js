import React, {Component} from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import Image from '../images/ShredLogoPlain.png'

class Navigation extends Component {

  handleLogin = (e) => {
    e.preventDefault()
      if(e.target.username.value && e.target.password.value) {
        fetch('http://localhost:3000/api/v1/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json', Accepts: 'application/json','Access-Control-Allow-Origin':'*'},
          body: JSON.stringify({user: {
            username: e.target.username.value,
            password: e.target.password.value
            } 
          })
        })
        .then(res => res.json())
        .then( res => {
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
        <Navbar bg="dark" variant="dark">
          <img src={Image} alt="logo" style={{alignSelf: 'center', height: 60, width: 60, borderWidth: 1,}} /> 
            <Navbar.Brand> {' '}SHRED</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto"></Nav>
                    {(this.props.user ? 
                      <div>
                        <Navbar.Brand href="/"> {this.props.currentUser.username}</Navbar.Brand>
                        <Navbar.Brand href="/searchtrails"> Search trails</Navbar.Brand>
                        <Navbar.Brand href="/trailsconditions"> Trail conditions</Navbar.Brand>
                        <Navbar.Brand href="/searchUsers">Search Users</Navbar.Brand>
                        <button className="button" onClick={() => this.props.dispatch({type: 'LOGOUT_ACTION'})}>LOGOUT</button>
                      </div>
                      :
                        <Form inline onSubmit={(e) => this.handleLogin(e)}>
                          <Form.Group controlId="formLogin">
                            <Form.Label></Form.Label>
                              <FormControl required={true} name="username" type="username" placeholder="Enter username"/>
                          </Form.Group>
                          <Form.Group controlId="formBasicPassword">
                            <Form.Label></Form.Label>
                              <Form.Control required={true} name="password" type="password" placeholder="Password" />
                          </Form.Group>
                            <Button className="loginButton" type="submit">LOGIN</Button>
                          </Form>
                    )}
                </Navbar.Collapse>
          </Navbar>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.loggedIn, 
  currentUser: state.userReducer.currentUser
 })

export default connect(mapStateToProps)(Navigation);