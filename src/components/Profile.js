import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserContainer from './UserComponents/userCard';
// import UserRideContainer from './UserComponents/userCard';
// import UserSavedRideContainer from './UserComponents/userCard';
import CardColumns from 'react-bootstrap/CardColumns';

import UserRideCard from './UserComponents/userRideCard';
import UserSavedRideCard from './UserComponents/userSavedRideCard';

class Profile extends Component { 

  render() {
    return(
      <div>
        <h1>wot</h1> 
        <CardColumns>
          <UserContainer />
          <UserRideCard /> 
          <UserSavedRideCard /> 
        </CardColumns>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer
 })
 
 export default connect(mapStateToProps)(Profile);