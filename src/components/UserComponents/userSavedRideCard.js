import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';

class userSavedRideCard extends Component {

  render() {
    return (
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{}User Saved Ride Card</Card.Title>
              <Card.Text>
              {}Saved Ride Deets
              </Card.Text>
            </Card.Body>
        </Card>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer
 })
 
 export default connect(mapStateToProps)(userSavedRideCard);