import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardColumns } from 'react-bootstrap';

class usersCard extends Component {

  render() {
    console.log(this.props.allUsers)
    return (
      <div>
        <CardColumns>
        {this.props.allUsers && this.props.allUsers.map(user =>
          <Card style={{ width: '17rem' }} key={user.id}> 
          <Card.Img className="userimage" variant="bottom" src={user.img_url} />
            <Card.Body>
              <Card.Header>Username: {user.username}</Card.Header>
              <Card.Text>Followers: {user.followers.length}</Card.Text>
              <Card.Text>Shreds: {user.rides.length}</Card.Text>
            </Card.Body>
        </Card>
        )}
        </CardColumns>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allUsers: state.allUsersReducer.allUsers
 })
 
 
 export default connect(mapStateToProps)(usersCard);