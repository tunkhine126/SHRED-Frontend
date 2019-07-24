import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Createform extends Component {

  handleCreate = (e) => {
    e.preventDefault()
    // console.log(e)
    if(e.target.createusername.value && e.target.createpassword.value && e.target.createemail.value) {
      fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Accepts: 'application/json','Access-Control-Allow-Origin':'*'},
        body: JSON.stringify({user: {
          username: e.target.createusername.value,
          password: e.target.createpassword.value,
          email: e.target.createemail.value,
          } 
        })
      })
      .then(res => res.json())
      .then( res => {
        if(res.jwt) {
          localStorage.setItem('token', res.jwt)
          localStorage.setItem('user_id', res.user.id)   
          this.props.dispatch({type: "LOGIN_USER", user: res.user})
          window.history.pushState({url: "/profile"}, "", "/profile")
          this.forceUpdate() 
        }
      })  
      .then(console.log("Your token:", localStorage.token))
      .then(e.target.reset())
    }
  }

  render() {
    return(
            <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>CREATE USER</Card.Title>
          <Form onSubmit={(e) => this.handleCreate(e)}>
            <Form.Group controlId="formCreateBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control name="createusername" type="username" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formCreateBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="createpassword" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formCreateBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name="createemail" type="text" placeholder="Email" />
            </Form.Group>
            <Button className="createButton" variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
 user: state.userReducer.loggedIn
})

export default connect(mapStateToProps)(Createform);