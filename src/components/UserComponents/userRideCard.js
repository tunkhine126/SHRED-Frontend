import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class userRideCard extends Component {

  render() {
    return (
      <div style={{ width: '25rem' }}>
        <h2>Shreds</h2>
          {this.props.user.currentUser.trails.map(trail => 
        <Card key={trail.id} >
          <Card.Img variant="top" src= {trail.imgMedium} />
            <Card.Body>
              <h4><Card.Header><Card.Link href={trail.url} target="_blank">{trail.name}</Card.Link></Card.Header></h4>
              <ListGroup as="ul">
              <ListGroupItem>DIFFICULTY: {trail.difficulty}</ListGroupItem>
              <ListGroupItem>LOCATION: {trail.location}</ListGroupItem>
              <ListGroupItem>STATUS: {trail.conditionStatus}</ListGroupItem>
              </ListGroup>
            </Card.Body>
        </Card>)}
      </div>  
    )}}

const mapStateToProps = state => ({
  user: state.userReducer
 })
 
 export default connect(mapStateToProps)(userRideCard);