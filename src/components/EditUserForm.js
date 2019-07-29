import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class EditUserForm extends Component {
  
  handleEdit = (e) => {
    e.preventDefault()
    console.log(e)
    // if(e.target.createusername.value && e.target.createpassword.value && e.target.createemail.value) {
    //   fetch('http://localhost:3000/api/v1/users', {
    //     method: 'PATCH',
    //     headers: {'Content-Type': 'application/json', Accepts: 'application/json','Access-Control-Allow-Origin':'*'},
    //     body: JSON.stringify({user: {
    //       location: e.target.location.value,
    //       email: e.target.editemail.value,
    //       image: e.target.editimage.value,
    //       } 
    //     })
    //   })
    //   .then(res => res.json())
    //   .then( res => {
    //     if(res.jwt) {
    //       localStorage.setItem('token', res.jwt)
    //       localStorage.setItem('user_id', res.user.id)   
    //       this.props.dispatch({type: "LOGIN_USER", user: res.user})
    //       window.history.pushState({url: "/profile"}, "", "/profile")
    //       this.forceUpdate() 
    //     }
    //   })  
    //   .then(console.log("Your token:", localStorage.token))
    //   .then(e.target.reset())
    // }
  }

  render() {
    return(
        <Card style={{ width: '18rem' }} >
          <Card.Body>
            <Card.Title>EDIT USER</Card.Title>
            <Form onSubmit={(e) => this.handleEdit(e)}>
              <Form.Group controlId="formEditLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control name="location" type="text" placeholder="Enter location" />
              </Form.Group>
              <Form.Group controlId="formEditEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="editemail" type="text" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formEditImage">
                <Form.Label>Image</Form.Label>
                <Form.Control name="editimage" type="text" placeholder="Image URL" />
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

export default connect(mapStateToProps)(EditUserForm);