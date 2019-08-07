import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchUsersDiv from './ImageDivs/SearchUsersDiv';
import AllUsersCard from './AllUsersCard';
import { CardDeck } from 'react-bootstrap';

class SearchUsers extends Component { 

    componentDidMount = () => {
      fetch('http://localhost:3000/api/v1/users', {
        method: 'GET',
        headers: {'Content-Type': 'application/json', Accepts: 'application/json'},
      })
      .then(res => res.json())
      .then(res => {
        this.props.dispatch({ type: "ALL_USERS", allUsers: res })
        })
      }

  render() {
    return(
      <SearchUsersDiv>
        <CardDeck>
          <AllUsersCard />
        </CardDeck>
      </SearchUsersDiv>
    )
  }
}

 export default connect()(SearchUsers);