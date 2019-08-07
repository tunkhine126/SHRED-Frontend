import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";
import { Card, ListGroup, Col } from 'react-bootstrap';
import EditUserForm from './EditUserForm';
import Image from './default-user-icon-9.jpg'

class userCard extends Component {

  render() {
    return (
      <div><br/><br/>
        <Card style={{ width: '23rem' }} className="text-center userProfileCard" bg="transparent" text="black">
            <Col md="auto">
              {this.props.user.img_url ? <Card.Img className="userimage" src={this.props.user.img_url} /> : <Card.Img className="userimage" src={Image} />}
            </Col>
              <h4 className="userCard">{this.props.user.username}</h4>
            <Card.Body> 
              <Card.Text>
                Location: {this.props.user.location}<br/>
                Contact: {this.props.user.email}
              </Card.Text>
                <Popup trigger={<button className="button"> Edit Profile</button> } position="top right" style={{ width: '18rem' }} closeOnDocumentClick>
                  <EditUserForm/>
                </Popup><br/><br/>
                  <Popup trigger={<button className="button"> Followers: {this.props.user.followed_users.length} </button> } 
                    position="bottom" 
                    style={{ width: '18rem' }} 
                    closeOnDocumentClick>
                      <ListGroup >
                        {this.props.user.followed_users.map(follower => <ListGroup.Item key={follower.id}>{follower.username}</ListGroup.Item>)}
                      </ListGroup>
                  </Popup> {' '}
                  <Popup trigger={<button className="button"> Following: {this.props.user.follower_users.length} </button> } 
                    position="bottom" 
                    style={{ width: '18rem' }} 
                    closeOnDocumentClick>
                      <ListGroup >
                        {this.props.user.follower_users.map(follower => <ListGroup.Item key={follower.id}>{follower.username}</ListGroup.Item>)}
                     </ListGroup>
                  </Popup> {''}
                  <Popup trigger={<button className="button"> Shreds: {this.props.user.trails.length} </button> } 
                    position="left" 
                    style={{ width: '18rem' }} 
                    closeOnDocumentClick>
                      <ListGroup >
                        {this.props.user.trails.map(trail => <ListGroup.Item key={trail.id}>{trail.name}</ListGroup.Item>)}
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