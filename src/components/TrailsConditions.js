import React, { Component } from 'react';
import { connect } from 'react-redux';
import Iframe from 'react-iframe'
import TrailsDiv from './ImageDivs/TrailsDiv';

class TrailsConditions extends Component {

  render() {
    return(
      <TrailsDiv>
        <h1 className="searchText">TRAIL CONDITIONS NEAR YOU</h1> 
          <Iframe 
            align="center"
            className="conditions-map" 
            frameborder="0" 
            scrolling="yes" 
            src="https://www.mtbproject.com/widget/conditions?favs=1&location=v=3&x=-9393453&y=4000267&z=5&height=600">
          </Iframe>
      </TrailsDiv>
    )
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
 })
 
 export default connect(mapStateToProps)(TrailsConditions);