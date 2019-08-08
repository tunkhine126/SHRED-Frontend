import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import Image from '../images/defaultShred.jpg'
import Popup from "reactjs-popup";

class trailsCard extends Component {

    addTrail = (trail) => {
      let post_trail = {...trail, api_index: trail.id, user_id: this.props.user.id}
        delete post_trail.id
      fetch('https://shred-app-backend.herokuapp.com/trails', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Accepts: 'application/json', Authorization: localStorage.token},
        body: JSON.stringify({
          trail: post_trail
        })
      })
      .then(res => res.json())
      .then(alert(`${trail.name} Added!`))
    }

  render() {
    return (
        <Row className="trailsrow d-flex justify-content-center m-3">
         {this.props.trails.map(trail =>
            <Card key={trail.id} style={{ width: '20rem' }} className="m-3"> 
              {trail.imgSmallMed ? <Card.Img variant="top" src={trail.imgSmallMed} className="trailImage"/> : <Card.Img variant="top" src={Image} className="trailImage"/>}
                <Card.Body>
                  <h4 className="trailName"><Card.Link href={trail.url} target="_blank">{trail.name}</Card.Link></h4>
                    <Card.Text>{trail.summary}</Card.Text>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>{trail.stars} Stars</ListGroupItem>
                        <ListGroupItem>Location: {trail.location}</ListGroupItem>
                          <Popup trigger={<button className="addButton">Expand Info</button>} position="top center" style={{ width: '18rem' }} closeOnDocumentClick>
                            Difficulty: {trail.difficulty}<br />
                            Type: {trail.type}<br />
                            Ascent: {trail.ascent}'<br />
                            Descent: {trail.descent}'<br />
                            High: {trail.high}'<br />
                            Low: {trail.low}'<br />
                          </Popup>
                            <button className="addbutton" onClick={() => this.addTrail(trail)}>Add to Shreds</button>
                      </ListGroup>
                </Card.Body>
            </Card>
          )}
        </Row>
    )
  }
}

const mapStateToProps = state => ({
  trails: state.trailReducer.trails,
  user: state.userReducer.currentUser
 })
 
 export default connect(mapStateToProps)(trailsCard);