import React, { Component } from 'react';
import { connect } from 'react-redux';
import Iframe from 'react-iframe'
import TrailsCard from './TrailsCard'
import SearchDiv from './ImageDivs/SearchDiv.js';


class Search extends Component {

  fetchTrails = (lat, lon) => {
    const maxResults = 100
    const decimalReplaceLat = lat.replace('.', '!')
    const decimalReplaceLon = lon.replace('.', '!')
      fetch(`http://localhost:3000/trails&lat=${decimalReplaceLat}&lon=${decimalReplaceLon}&maxResults=${maxResults}`)
      .then(res => res.json())
      .then(res => this.props.dispatch({ type: "ALL_TRAILS", data: res }))
    }

  componentDidMount() {
      this.fetchTrails("33.7490", "-84.3880")
  }

  render() {
    return(
      <SearchDiv>
        <h1 className="searchText">SEARCH TRAILS NEAR YOU</h1> 
          <Iframe 
            align="center"
            className = "trails-map"
            frameborder="0" 
            scrolling="yes" 
            src="https://www.mtbproject.com/widget/map?favs=1&location=ip&x=-9393817&y=4002233&z=9.5&h=600">
          </Iframe><br/>
          <TrailsCard /><br />
        </SearchDiv>
    )
  }
}

const mapStateToProps = state => ({
  trails: state.trailReducer.trails
 })
 
 export default connect(mapStateToProps)(Search);