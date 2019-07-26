import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

class userRideCard extends Component {

  render() {
    return (
      <div>
        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
            <h4><Card.Header>Ride Card</Card.Header></h4>
              <Card.Text>
              User Ride Details
              </Card.Text>
            </Card.Body>
        </Card>
      </div>  
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer
 })
 
 export default connect(mapStateToProps)(userRideCard);