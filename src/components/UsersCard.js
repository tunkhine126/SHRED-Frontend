import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardDeck } from 'react-bootstrap';

class usersCard extends Component {

  render() {
    console.log(this.props.allUsers)
    return (
      <CardDeck>
        {this.props.allUsers && this.props.allUsers.map(user =>
          <Card key={user.id} > 
          <Card.Img className="userimage" variant="bottom" src={user.img_url} />
            <Card.Body>
            <h4><Card.Header>Username: {user.username}</Card.Header></h4>
              <Card.Text>Followers: {user.followers.length}</Card.Text>
              <Card.Text>Shreds: {user.rides.length}</Card.Text>
            </Card.Body>
        </Card>
        )}
      </CardDeck>
    )
  }
}

const mapStateToProps = state => ({
  allUsers: state.allUsersReducer.allUsers
 })
 
 
 export default connect(mapStateToProps)(usersCard);