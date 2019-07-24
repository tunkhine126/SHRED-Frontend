import React, { Component } from 'react';
import { connect } from 'react-redux';
import Iframe from 'react-iframe'

class Search extends Component {

  render() {
    return(
      <div>
        <h1>SEARCH PAGE</h1> 
        <Iframe 
          title="searchFrame" 
          className = "trails-map"
          frameborder="0" 
          scrolling="no" 
          src="https://www.mtbproject.com/widget/map?favs=1&location=ip&x=-9393817&y=4002232&z=6.5&h=500">
        </Iframe>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
 })
 
 export default connect(mapStateToProps)(Search);