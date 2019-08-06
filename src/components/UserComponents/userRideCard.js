import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardDeck, ListGroup, ListGroupItem } from 'react-bootstrap';

class userRideCard extends Component {

  render() {
    return (
      <div>
        <div style={{ width: '80rem'}} >
        <h2>Your Trails</h2>
          <CardDeck class="row flex-row flex-nowrap">
          {this.props.user.currentUser.trails.map(trail => 
            <Card key={trail.id} className="cardSpecs" bg="light" >
          <Card.Img className="bikeimage" variant="top" src= {trail.imgSmallMed} />
            <Card.Body className="cardSpecs">
              <h4><Card.Header><Card.Link href={trail.url} target="_blank">{trail.name}</Card.Link></Card.Header></h4>
              <ListGroup >
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