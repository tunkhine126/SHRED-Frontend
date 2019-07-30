import React, { Component } from 'react';
import { Form, Col, Row } from 'react-bootstrap';

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
          // this.props.dispatch({type: "LOGIN_USER", user: res.user})
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
      <div>
        <br/><h1 className="splashHeader">The #1 App for Mountain Bikers</h1><br/><br/><br/>
      <Row><Col></Col><Col xs={6}></Col>     
        <Col>
            <h3 className="text-center" style={{ width: '18rem' }}> Sign Up</h3>
              <Form onSubmit={(e) => this.handleCreate(e)}>
              <Form.Group style={{ width: '18rem' }}>
                <Form.Label>Username</Form.Label>
                   <Form.Control name="createusername" type="username" placeholder="Enter username" />
               </Form.Group>
              <Form.Group style={{ width: '18rem' }}>
                <Form.Label>Password</Form.Label>
                  <Form.Control name="createpassword" type="password" placeholder="Password" />
               </Form.Group>
              <Form.Group style={{ width: '18rem' }}>
                 <Form.Label>Email</Form.Label>
                  <Form.Control name="createemail" type="text" placeholder="Email" />
              </Form.Group>
              <button className="button" variant="primary" type="submit">Submit</button>
            </Form>
        </Col>
      </Row>
    </div>
    )
  }
}

export default Createform;