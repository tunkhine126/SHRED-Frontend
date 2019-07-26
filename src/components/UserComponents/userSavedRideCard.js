import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';

class userSavedRideCard extends Component {

  render() {
    return (
      <div>
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
            <h4><Card.Header>Saved Rides</Card.Header></h4>
              <Card.Text>
              Saved Ride Deets
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
 
 export default connect(mapStateToProps)(userSavedRideCard);