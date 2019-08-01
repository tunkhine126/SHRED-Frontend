// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import TrailsDiv from '../components/TrailsDiv';

// class Trails extends Component {

//   fetchTrails = (lat, lon) => {
//     const maxResults = 100
//     const decimalReplaceLat = lat.replace('.', '!')
//     const decimalReplaceLon = lon.replace('.', '!')
//     fetch(`http://localhost:3000/trails&lat=${decimalReplaceLat}&lon=${decimalReplaceLon}&maxResults=${maxResults}`)
//     .then(res => res.json())
//     .then(res => this.props.dispatch({ type: "ALL_TRAILS", data: res }))
// }

//   componentDidMount() {
//       this.fetchTrails("33.7490", "-84.3880")
//   }

//   render() {
//     return(
//       <TrailsDiv>
//         <h1 className="searchText">All Trails</h1> 

//       </TrailsDiv>
//     )
//   }
// }

// const mapStateToProps = state => ({
//   trails: state.trailReducer.trails
//  })
 
//  export default connect(mapStateToProps)(Trails);