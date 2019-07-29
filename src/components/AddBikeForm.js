import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class AddBikeForm extends Component {
  
  handleAddBike = (e) => {
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
        <Card style={{ width: '18rem' }} className="addBikeForm" bg="dark" text="white">
          <Card.Body>
            <Form onSubmit={(e) => this.handleAddBike(e)}>
              <Form.Group controlId="addBikeForm">
              <Card.Text>Add a Bike</Card.Text>
                  <Form.Control name="name" type="text" placeholder="Enter Name" />
                  <Form.Control name="image" type="text" placeholder="Enter Image URL" />
                  <Form.Control name="category" type="text" placeholder="Enter Category" />
                  <Form.Control name="frameset" type="text" placeholder="Enter Frameset" />
                  <Form.Control name="groupset" type="text" placeholder="Enter Groupset" />
                  <Form.Control name="suspension" type="text" placeholder="Enter Suspension" />
                  <Form.Control name="wheelset" type="text" placeholder="Enter Wheelset" />
                  <Form.Control name="tires" type="text" placeholder="Enter Tires" />
              </Form.Group>
              <Button className="createButton" variant="primary" type="submit" >
                Add Bike
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

export default connect(mapStateToProps)(AddBikeForm);