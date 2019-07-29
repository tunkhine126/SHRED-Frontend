import React, { Component } from 'react';
import { connect } from 'react-redux';
import Iframe from 'react-iframe'
import { Form, Button } from 'react-bootstrap';
import SearchDiv from '../components/SearchDiv';

class Search extends Component {

  handleSearch = (e) => {
    e.preventDefault()
    console.log(e)
    // if(e.target.location.value) {
    //   fetch('http://localhost:3000/api/v1/users', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json', Accepts: 'application/json','Access-Control-Allow-Origin':'*'},
    //     body: JSON.stringify({user: {
    //      location: e.target.location.value,
    //       } 
    //     })
    //   })
    // }
  }

  render() {
    return(
      <SearchDiv>
        <h1 className="searchText">SEARCH TRAILS</h1> 
        <Iframe 
          align="center"
          className = "trails-map"
          frameborder="0" 
          scrolling="yes" 
          src="https://www.mtbproject.com/widget/map?favs=1&location=ip&x=-9393817&y=4002233&z=9.5&h=500">
        </Iframe><br/>
              <Form className="searchTrailsForm" onSubmit={(e) => this.handleSearch(e)} style={{ width: '18rem' }}>
                <Form.Group controlId="formEditLocation">
                  <Form.Control name="location" type="text" placeholder="Enter location" />
                  <Button className="searchTrailButton" variant="primary" type="submit" >
                    Submit
                  </Button>
                </Form.Group>
              </Form>
      </SearchDiv>
    )
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
 })
 
 export default connect(mapStateToProps)(Search);