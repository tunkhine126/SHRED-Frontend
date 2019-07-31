import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Row, ListGroup, ListGroupItem } from 'react-bootstrap';

class trailsCard extends Component {

  render() {
    return (
      <div>
        <Row>
        {this.props.trails && this.props.trails.map(trail =>
          <Card key={trail.id} style={{ width: '20rem' }}> 
          <Card.Img variant="top" src={trail.imgSmallMed} style={{ height: '20rem' }}/>
            <Card.Body>
              <h4 className="trailName"><Card.Link href={trail.url}>{trail.name}</Card.Link></h4>
              <Card.Text>{trail.summary}</Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Status: {trail.conditionStatus}</ListGroupItem>
                <ListGroupItem>{trail.stars} Stars</ListGroupItem>
                <button className="addbutton">Add to Shreds</button>
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
  trails: state.trailReducer.trails
 })
 
 export default connect(mapStateToProps)(trailsCard);