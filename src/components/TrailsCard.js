import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Row, ListGroup, ListGroupItem } from 'react-bootstrap';

class trailsCard extends Component {

    addTrail = (trail) => {
      let post_trail = {...trail, api_index: trail.id, user_id: this.props.user.id}
      delete post_trail.id
      fetch('http://localhost:3000/trails', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Accepts: 'application/json', Authorization: localStorage.token},
        body: JSON.stringify({
          trail: post_trail
        })
      })
      .then(res => res.json())
      .then(console.log)
    }

  render() {
    return (
      <div>
        <Row>
        {this.props.trails && this.props.trails.map(trail =>
          <Card key={trail.id} style={{ width: '20rem' }} > 
          <Card.Img variant="top" src={trail.imgSmallMed} style={{ height: '20rem' }}/>
            <Card.Body>
              <h4 className="trailName"><Card.Link href={trail.url} target="_blank">{trail.name}</Card.Link></h4>
              <Card.Text>{trail.summary}</Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Status: {trail.conditionStatus}</ListGroupItem>
                <ListGroupItem>{trail.stars} Stars</ListGroupItem>
                <button className="addbutton" onClick={() => this.addTrail(trail)}>Add to Shreds</button>
              </ListGroup>
            </Card.Body>
        </Card>
        )}
        </Row><br/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  trails: state.trailReducer.trails,
  user: state.userReducer.currentUser
 })
 
 export default connect(mapStateToProps)(trailsCard);