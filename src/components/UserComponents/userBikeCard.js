import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddBikeForm from './AddBikeForm';
import Popup from "reactjs-popup";
import { Card, CardDeck } from 'react-bootstrap';

class userBikeCard extends Component {

  render() {
    return (
      <div>
        <div style={{ width: '70rem'}}>
          <h2 className="garagetitleText">Your Garage {' '}   
            <Popup trigger={<button className="garageAddButton">+</button>} position="right center" style={{ width: '18rem' }} closeOnDocumentClick>
                <AddBikeForm/>
            </Popup>
          </h2> 
          <CardDeck >
          {this.props.user.bikes.map(bike => 
            <Card key={bike.id} className="cardSpecs">
            <Card.Img className="bikeimage" variant="top" src={bike.img_url} />
            <Popup trigger={<button className="garageAddButton">Specs</button>} position="top center" style={{ width: '18rem' }} closeOnDocumentClick>
                Name: {bike.name}<br/>
                Category: {bike.category}<br/>  
                Frameset: {bike.frameset}<br/>
                Groupset: {bike.groupset}<br/>
                Suspension: {bike.suspension}<br/>
                Wheelset: {bike.wheelset}<br/>
                Tires: {bike.tires}<br/>
              </Popup>
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