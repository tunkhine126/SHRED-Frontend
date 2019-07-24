import React, { Component } from 'react';
import { connect } from 'react-redux';
import Iframe from 'react-iframe'

class Search extends Component {

  render() {
    return(
      <div>
        <h1>TRAIL CONDITIONS</h1> 
        <Iframe 
          classname="conditions-map" 
          frameborder="0" 
          scrolling="yes" 
          src="https://www.mtbproject.com/widget/conditions?v=3&x=-9393453&y=4000267&z=5&height=400">
        </Iframe>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
 })
 
 export default connect(mapStateToProps)(Search);