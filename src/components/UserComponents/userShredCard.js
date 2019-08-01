import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardDeck, ListGroup, ListGroupItem } from 'react-bootstrap';

class userShredCard extends Component {

  render() {
    return (
      <div>
      {this.props.user.currentUser.trails.map(trail => 
        <Card key={trail.id} >
          <Card.Img variant="top" src= {trail.imgSmallMed} />
            <Card.Body >
              <h4><Card.Header><Card.Link href={trail.url} target="_blank">{trail.name}</Card.Link></Card.Header></h4>
              <ListGroup >
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
 
 export default connect(mapStateToProps)(userShredCard);