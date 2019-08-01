import React, { Component } from 'react';
import { CardDeck } from 'react-bootstrap';
import UserCard from './UserComponents/userCard';
import UserRideCard from './UserComponents/userRideCard';
import UserShredCard from './UserComponents/userRideCard';
import UserBikeCard from './UserComponents/userBikeCard';
import ProfileDiv from '../components/ProfileDiv';

class Profile extends Component { 

  render() {
    return(
      <ProfileDiv>
        <CardDeck>
          <UserCard />
            {/* <div className="shredsRightCol"> */}
              {/* <UserRideCard/> */}
              <UserShredCard/>
            {/* </div> */}
        </CardDeck><br/>
        <CardDeck>
          <div className="garageMidCol">
            <UserBikeCard />
          </div>
        </CardDeck><br/>
      </ProfileDiv>
    )
  }
}
 
 export default Profile;