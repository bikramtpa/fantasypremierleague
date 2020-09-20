import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  /* marginTop: -10 */
};

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 0,
  paddingLeft: 20,
  paddingRight: 20,
  width: 300,
};

const buttonStyle = {
  marginBottom: 0
};

class LoginForm extends Component {

  handleFormSubmit(e) {
    e.preventDefault();

    console.log("FORM SUBMIT!");

  }

  render() {
    return (
        <div className="container">
        <h2>Login form</h2>
        <form onSubmit={(e) => login(e)} className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-2" for="email">Email:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" for="pwd">Password:</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <div className="checkbox">
                <label><input type="checkbox" name="remember" /> Remember me</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm;

const login = (e) => {
  e.preventDefault();
  let request = {
    email: document.getElementById('email').value,
    password: document.getElementById('pwd').value,
  }
  axios.post('http://localhost:3000/login', request)
    .then(resp => {
      alert(resp.data.message);
    })
    .catch(err => {
    console.log(err)
  })
}