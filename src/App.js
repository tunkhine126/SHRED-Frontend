import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Profile from './components/Profile';
import SearchTrails from './components/SearchTrails';
import TrailsConditions from './components/TrailsConditions';
import Navigation from './components/Navigation'
import Createform from './components/Createform';
import Trails from './components/Trails';
import EditUserForm from './components/UserComponents/EditUserForm';
import SearchUsers from './components/SearchUsers';
import AppDiv from './components/AppDiv';

class App extends Component{

    componentDidMount = () => {
      if(localStorage.token) {
        fetch('http://localhost:3000/api/v1/profile', {
          headers: {Authorization: localStorage.token},
        })
        .then(res => res.json())
        .then(res => {
          if(res.user) 
            this.props.dispatch({type: "LOGIN_USER", user: res.user})
        })
      }
    }

  render() {
    return (
      <div>
        <AppDiv>
          <Navigation />  
            {
              localStorage.token && !this.props.user_id ? null :
                <Switch>
                  <Route exact path="/" render = {() => (this.props.loggedIn ? <Redirect to='/profile'/> : <Createform /> )}/>
                  <Route exact path="/profile" render = {() => (this.props.loggedIn ? <Profile/> : <Redirect to='/'/>)}/>
                  <Route exact path="/searchtrails" render = {() => (this.props.loggedIn ? <SearchTrails/> : <Redirect to='/'/>)}/>
                  <Route exact path="/trailsconditions" render = {() => (this.props.loggedIn ? <TrailsConditions/> : <Redirect to='/profile'/>)}/>
                  <Route exact path="/editUserForm" render = {() => (this.props.loggedIn ? <EditUserForm/> : <Redirect to='/'/>)}/>
                  <Route exact path="/searchUsers" render = {() => (this.props.loggedIn ? <SearchUsers/> : <Redirect to='/'/>)}/>
                  <Route exact path="/trails" render = {() => (this.props.loggedIn ? <Trails/> : <Redirect to='/'/>)}/>
                </Switch>
            }
          </AppDiv>
        </div>
    );
  }

}

const mapStateToProps = state => ({
  loggedIn: state.userReducer.loggedIn,
  user_id: state.userReducer.currentUser.id 
 })

 export default connect(mapStateToProps)(App);
