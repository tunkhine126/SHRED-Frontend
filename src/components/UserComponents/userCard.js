import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, ListGroup } from 'react-bootstrap';

class userCard extends Component {

  render() {
    return (
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body> 
              <Card.Title>{this.props.user.username}'s Deets</Card.Title>
              <Card.Text>
              {this.props.user.location}
              </Card.Text>
              <ListGroup >
                {this.props.user.followed_users.map(follower => <ListGroup.Item key={follower.id}>{follower.username}</ListGroup.Item>)}
              </ListGroup>
            </Card.Body>
        </Card>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.currentUser
 })
 
 export default connect(mapStateToProps)(userCard);