import React, { Component } from 'react';
import './App.css';
import Landing from './Landing'

class App extends Component{

  handleLogin = (e) => {
    e.preventDefault()
    // console.log(e)
    if(e.target.username.value && e.target.password.value) {
      fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Accepts: 'application/json','Access-Control-Allow-Origin':'*'},
        body: JSON.stringify({user: {
          username: e.target.username.value,
          password: e.target.password.value
        } })
      })
      .then(res => res.json())
      .then( res => {
        if(res.jwt) {
          localStorage.setItem('token', res.jwt)
          localStorage.setItem('user_id', res.user.id)   
        }
      })
      .then(console.log("Your token:", localStorage.token))
      .then(e.target.reset())
    }
  }

  handleCreate = (e) => {
    e.preventDefault()
    // console.log(e)
    if(e.target.createusername.value && e.target.createpassword.value && e.target.createemail.value) {
      fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Accepts: 'application/json','Access-Control-Allow-Origin':'*'},
        body: JSON.stringify({user: {
          username: e.target.createusername.value,
          password: e.target.createpassword.value,
          email: e.target.createemail.value,
        } })
      })
      .then(res => res.json())
      .then( res => {
        if(res.jwt) {
          localStorage.setItem('token', res.jwt)
          localStorage.setItem('user_id', res.user.id)   
        }
      })  
      .then(console.log("Your token:", localStorage.token))
      .then(e.target.reset())
    }
  }



  render() {
    return (

      <Landing handleLogin={this.handleLogin} handleCreate={this.handleCreate}/>
    );
  }

}

export default App;
