import React, { Component } from 'react';
import { connect } from 'react-redux';
import userCard from './userCard';

class userContainer extends Component {

  render() {
    return(
      <div>
        <UserCard />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer
 })
 
 export default connect(mapStateToProps)(userContainer);