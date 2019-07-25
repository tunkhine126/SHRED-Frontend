import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

class userRideCard extends Component {

  render() {
    return (
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>User Ride Card</Card.Title>
              <Card.Text>
              User Ride Details
              </Card.Text>
            </Card.Body>
        </Card>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer
 })
 
 export default connect(mapStateToProps)(userRideCard);