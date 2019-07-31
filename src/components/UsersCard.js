import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardColumns } from 'react-bootstrap';

class usersCard extends Component {

  follow = (user) => {
    console.log(user)
    let follow = {user_id: user.id, followed_user_id: this.props.user.id}
    fetch('http://localhost:3000/followings', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Accepts: 'application/json', Authorization: localStorage.token},
      body: JSON.stringify({
        following: follow
      })
    })
    .then(res => res.json())
    // .then(console.log)
  }

  render() {
    return (
      <div>
        <CardColumns>
          {this.props.allUsers && this.props.allUsers.map(user =>
            <Card style={{ width: '17rem' }} key={user.id}> 
              <Card.Img className="userimage" variant="bottom" src={user.img_url} />
                <Card.Body>
                  <Card.Header className="text-center">{user.username}</Card.Header>
                  <Card.Text>Followers: {user.followed_users.length}</Card.Text>
                  <Card.Text>Shreds: {user.trails.length}</Card.Text>
                  <button className="addbutton" onClick={() => this.follow(user)}>Follow {user.username}</button>
                </Card.Body>
            </Card>
          )}
        </CardColumns>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allUsers: state.allUsersReducer.allUsers,
  user: state.userReducer.currentUser
 })
 
 
 export default connect(mapStateToProps)(usersCard);