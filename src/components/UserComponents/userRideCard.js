import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardDeck, ListGroup, ListGroupItem } from 'react-bootstrap';

class userRideCard extends Component {

  render() {
    return (
      <div>
      <div style={{ width: '70rem'}}>
        <h2>Your Shreds</h2>
        <CardDeck>
          {this.props.user.currentUser.trails.map(trail => 
        <Card key={trail.id} className="cardSpecs">
          <Card.Img className="userimage" variant="top" src= {trail.imgMedium} />
            <Card.Body className="cardSpecs">
              <h4><Card.Header><Card.Link href={trail.url} target="_blank">{trail.name}</Card.Link></Card.Header></h4>
              <ListGroup as="ul">
              <ListGroupItem>DIFFICULTY: {trail.difficulty}</ListGroupItem>
              <ListGroupItem>LOCATION: {trail.location}</ListGroupItem>
              <ListGroupItem>STATUS: {trail.conditionStatus}</ListGroupItem>
              </ListGroup>
            </Card.Body>
        </Card>)}
        </CardDeck>
      </div>  
      </div>
    )}}

const mapStateToProps = state => ({
  user: state.userReducer
 })
 
 export default connect(mapStateToProps)(userRideCard);