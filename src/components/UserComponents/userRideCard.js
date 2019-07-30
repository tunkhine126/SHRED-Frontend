import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

class userRideCard extends Component {

  render() {
    return (
      <div className="rideCard" style={{ width: '30rem' }}>
        <h2>Shreds</h2>
          {this.props.user.currentUser.rides.map(ride => 
        <Card key={ride.id} >
          <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <h4><Card.Header>Ride {ride.id}</Card.Header></h4>
                <Card.Text>{ride.date}</Card.Text>
                <Card.Text>{ride.description}</Card.Text>
            </Card.Body>
        </Card>)}
      </div>  
    )}}

const mapStateToProps = state => ({
  user: state.userReducer
 })
 
 export default connect(mapStateToProps)(userRideCard);