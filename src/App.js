import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Profile from './components/Profile';
import Search from './components/Search';
import Navigation from './components/Navigation'
import Createform from './components/Createform';
import store from './store'

class App extends Component{

    componentDidMount = () => {
      if(localStorage.token) {
        fetch('http://localhost:3000/api/v1/users', {
          headers: {Authorization: localStorage.token},
        })
        .then(res => res.json())
        .then( res => {
          if(res.jwt) 
            this.props.dispatch({type: "LOGIN_USER", user: res.user})
        })
      }
    }

  render() {
    return (
      <Provider store={store}>
          <Navigation />    
            <Switch>
              <Route exact path="/" render = {() => (this.props.loggedIn ? <Redirect to='/profile'/> : <Createform /> )}/>
              <Route exact path="/profile" render = {() => (this.props.loggedIn ? <Profile/> : <Redirect to='/'/>)}/>
              <Route exact path="/search" render = {() => (this.props.loggedIn ? <Search/> : <Redirect to='/'/>)}/>
            </Switch>
      </Provider>
    );
  }

}

const mapStateToProps = state => ({
  loggedIn: state.userReducer.loggedIn
 })

 export default connect(mapStateToProps)(App);
