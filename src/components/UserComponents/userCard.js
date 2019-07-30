import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";
import { Card, ListGroup, Col, Image } from 'react-bootstrap';
import EditUserForm from './EditUserForm';


class userCard extends Component {

  handleEdit = (e) => {
    e.preventDefault()
    console.log(e)
    if(e.target.location.value && e.target.editemail.value && e.target.editimage.value) {
      fetch('http://localhost:3000/api/v1/users', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json', Accepts: 'application/json','Access-Control-Allow-Origin':'*'},
        body: JSON.stringify({user: {
          location: e.target.location.value,
          email: e.target.editemail.value,
          img_url: e.target.editimage.value,
          } 
        })
      })
      .then(res => res.json())
      .then( res => {
        if(res.jwt) {
          localStorage.setItem('token', res.jwt)
          localStorage.setItem('user_id', res.user.id)   
          this.props.dispatch({type: "LOGIN_USER", user: res.user})
          window.history.pushState({url: "/profile"}, "", "/profile")
          this.forceUpdate() 
        }
      })  
      .then(console.log("Your token:", localStorage.token))
      .then(e.target.reset())
    }
  }

  render() {
    // console.log(this.props)
    return (
      <div>
      <h2 className="userCard">{this.props.user.username}'s Profile</h2>
        <Card style={{ width: '20rem' }} className="text-center">
            <Col xs={6} md={4}>
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
                <br/><br/><h4><Card.Header>Followers: {this.props.user.followers.length} </Card.Header></h4>
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