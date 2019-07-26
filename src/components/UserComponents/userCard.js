import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, ListGroup, Col, Image } from 'react-bootstrap';

class userCard extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <Card style={{ width: '18rem' }}>
            <Col xs={6} md={4}>
              <Image src={this.props.user.img_url} roundedCircle />
            </Col>
            <Card.Body> 
              <h4><Card.Header>{this.props.user.username}'s Profile</Card.Header></h4>
              <Card.Text>
              Location: {this.props.user.location}
              </Card.Text>
              <h4><Card.Header>Followers: {this.props.user.followers.length} </Card.Header></h4>
              <ListGroup >
                {this.props.user.follower_users.map(follower => <ListGroup.Item key={follower.id}>{follower.username}</ListGroup.Item>)}
              </ListGroup>
            </Card.Body>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.currentUser
 })
 
 export default connect(mapStateToProps)(userCard);