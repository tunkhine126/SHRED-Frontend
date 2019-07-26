import React, { Component } from 'react';
import { connect } from 'react-redux';
// import UserContainer from './UserComponents/userCard';
// import UserRideContainer from './UserComponents/userCard';
// import UserSavedRideContainer from './UserComponents/userCard';
import CardColumns from 'react-bootstrap/CardColumns';
import UserCard from './UserComponents/userCard';
import UserRideCard from './UserComponents/userRideCard';
import UserSavedRideCard from './UserComponents/userSavedRideCard';
import ProfileDiv from '../components/ProfileDiv';

class Profile extends Component { 

  render() {
    return(
      <ProfileDiv>
        <CardColumns>
            <UserCard /> 
            <UserRideCard /> 
            <UserSavedRideCard /> 
        </CardColumns>
      </ProfileDiv>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer
 })
 
 export default connect(mapStateToProps)(Profile);