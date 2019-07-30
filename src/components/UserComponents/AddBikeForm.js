import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class AddBikeForm extends Component {
  
  handleAddBike = (e) => {
    e.preventDefault()
    console.log(e)
      fetch('http://localhost:3000/bikes', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Accepts: 'application/json',Authorization: localStorage.token},
        body: JSON.stringify({user: {
          name: e.target.name.value,
          img_url: e.target.image.value,
          category: e.target.category.value,
          framset: e.target.frameset.value,
          groupset: e.target.groupset.value,
          suspension: e.target.suspension.value,
          wheelset: e.target.wheelset.value,
          tires: e.target.tires.value,
          } 
        })
      })
      .then(res => res.json())
        .then(res => {
          if(res.user) 
            this.props.dispatch({type: "LOGIN_USER", user: res.user})
      })  
      .then(console.log("Your token:", localStorage.token))
      .then(e.target.reset())
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