import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Landing extends Component {

  render(props) {
    // console.log(this.props)
    return(
      <div >
        LOGIN:
          <Form onSubmit={(e) => this.props.handleLogin(e)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control name="username" type="username" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Button className="loginButton" variant="primary" type="submit" >
              Submit
            </Button>
          </Form><br></br>
          CREATE USER:
          <Form onSubmit={(e) => this.props.handleCreate(e)}>
            <Form.Group controlId="formCreateBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control name="createusername" type="username" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formCreateBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="createpassword" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formCreateBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name="createemail" type="text" placeholder="Email" />
            </Form.Group>
            <Button className="createButton" variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
      </div>
    )
  }
}

export default Landing;