import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import UserCard from './UserComponents/userCard';
import UserRideCard from './UserComponents/userRideCard';
import UserBikeCard from './UserComponents/userBikeCard';
import ProfileDiv from '../components/ImageDivs/ProfileDiv';

class Profile extends Component { 

  render() {
    return(
      <ProfileDiv>
        <Row>
          <UserCard />
            <Col className="shredsRightCol">
              <UserRideCard/>
            </Col>
        </Row><br />
        <Row>
          <Col className="garageMidCol" >
            <UserBikeCard />
          </Col>
        </Row><br/>
      </ProfileDiv>
    )
  }
}
 
 export default Profile;