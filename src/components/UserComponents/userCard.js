import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";
import { Card, ListGroup, Col, Image } from 'react-bootstrap';
import EditUserForm from './EditUserForm';


class userCard extends Component {

  render() {
    return (
      <div>
      <h2 className="userCard">{this.props.user.username}'s Profile</h2>
        <Card style={{ width: '20rem' }} className="text-center">
            <Col md="auto">
              <Image src={this.props.user.img_url} roundedCircle />
            </Col>
            <Card.Body> 
              <Card.Text>
              Location: {this.props.user.location}
              </Card.Text>
              <Card.Text>
              Contact: {this.props.user.email}
              </Card.Text>
                <Popup trigger={<button className="button"> Edit Profile</button> } position="right center" style={{ width: '18rem' }} closeOnDocumentClick>
                  <EditUserForm/>
                </Popup>
                <br/><br/>
                  <Popup trigger={<button className="button"> Followers: {this.props.user.followed_users.length} </button> } 
                    position="right center" 
                    style={{ width: '18rem' }} 
                    closeOnDocumentClick>
                    <ListGroup >
                      {this.props.user.followed_users.map(follower => <ListGroup.Item key={follower.id}>{follower.username}</ListGroup.Item>)}
                    </ListGroup>
                  </Popup>
                  <br/><br/>
                  <Popup trigger={<button className="button"> Following: {this.props.user.follower_users.length} </button> } 
                    position="right center" 
                    style={{ width: '18rem' }} 
                    closeOnDocumentClick>
                    <ListGroup >
                      {this.props.user.follower_users.map(follower => <ListGroup.Item key={follower.id}>{follower.username}</ListGroup.Item>)}
                    </ListGroup>
                  </Popup>
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