import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddBikeForm from './AddBikeForm';
import Popup from "reactjs-popup";
import { Card, CardDeck, Button } from 'react-bootstrap';
import EditBikeForm from './EditBikeForm'

class userBikeCard extends Component {

  
  render() {
    return (
      <div>
        <div style={{ width: '80rem' }}>
          <h2 className="garagetitleText">Your Garage {' '}   
            <Popup trigger={<button className="garageAddButton">+</button>} position="bottom center" style={{ width: '18rem' }} closeOnDocumentClick>
                <AddBikeForm/>
            </Popup>
          </h2> 
          <CardDeck class="row flex-row flex-nowrap">
          {this.props.user.bikes.map(bike => 
            <Card key={bike.id} className="cardSpecs" style={{ width: '20rem' }} bg="light">
              <Card.Img className="userimage" variant="top" src={bike.img_url} /><br/>
                <Card.Text position="left" >
                    Name: {bike.name}<br/>
                    Category: {bike.category}<br/>  
                    Frameset: {bike.frameset}<br/>
                    Groupset: {bike.groupset}<br/>
                    Suspension: {bike.suspension}<br/>
                    Wheelset: {bike.wheelset}<br/>
                    Tires: {bike.tires}<br/>
                  </Card.Text>
            </Card>)}
          </CardDeck>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.currentUser
 })
 
 export default connect(mapStateToProps)(userBikeCard);