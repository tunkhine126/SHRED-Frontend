import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardDeck } from 'react-bootstrap';
import UserCard from './UserComponents/userCard';
import UserRideCard from './UserComponents/userRideCard';
import UserSavedRideCard from './UserComponents/userSavedRideCard';
import UserBikeCard from './UserComponents/userBikeCard';
import ProfileDiv from '../components/ProfileDiv';


class Profile extends Component { 

  render() {
    return(
      <ProfileDiv>
        <CardDeck>
          <UserCard />
          <UserRideCard />
          <UserSavedRideCard /> 
        </CardDeck>
        <br/>
        <CardDeck>
          <UserBikeCard />
        </CardDeck>
      </ProfileDiv>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer
 })
 
 export default connect(mapStateToProps)(Profile);