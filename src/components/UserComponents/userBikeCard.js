import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddBikeForm from '../AddBikeForm';
import Popup from "reactjs-popup";
import { Card, ListGroup } from 'react-bootstrap';

class userBikeCard extends Component {

  render() {
    // console.log(this.props.user)
    return (
        <div>
          <h4 className="garageCard">GARAGE 
            <Popup trigger={<button className="button">+</button>} position="right center" style={{ width: '18rem' }} closeOnDocumentClick>
                <AddBikeForm/>
            </Popup>
          </h4> 
          {this.props.user.bikes.map(bike => 
            <Card key={bike.id} style={{ width: '20rem'}}>
            <Card.Img className="bikeimage" variant="bottom" src={bike.img_url} />
              <ListGroup>
                Name: {bike.name}<br/>
                Category: {bike.category}<br/>  
                Frameset: {bike.frameset}<br/>
                Groupset: {bike.groupset}<br/>
                Suspension: {bike.suspension}<br/>
                Wheelset: {bike.wheelset}<br/>
                Tires: {bike.tires}<br/>
              </ListGroup>
            </Card>)}
        </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.currentUser
 })
 
 export default connect(mapStateToProps)(userBikeCard);