import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';

class userSavedRideCard extends Component {

  render() {
    return (
      <div >
      <h2 className="savedRideCard" style={{ width: '30rem' }}>Saved Rides</h2>
        <Card  style={{ width: '30rem' }}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
            <h4><Card.Header>Some Saved Ride</Card.Header></h4>
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