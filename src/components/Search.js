import React, { Component } from 'react';
import { connect } from 'react-redux';
import Iframe from 'react-iframe'
import SearchDiv from '../components/SearchDiv';

class Search extends Component {

  render() {
    return(
      <SearchDiv>
        <h1>SEARCH PAGE</h1> 
        <Iframe 
          title="searchFrame" 
          className = "trails-map"
          frameborder="0" 
          scrolling="yes" 
          src="https://www.mtbproject.com/widget/map?favs=1&location=ip&x=-9393817&y=4002232&z=6.5&h=500">
        </Iframe>
      </SearchDiv>
    )
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
 })
 
 export default connect(mapStateToProps)(Search);