import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, ListGroup  } from 'react-bootstrap';

class userBikeCard extends Component {

  render() {
    // console.log(this.props.user)
    return (
        <div>
          <h2 className="garage">GARAGE:</h2>
          {this.props.user.bikes.map(bike => 
            <Card key={bike.id}>
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