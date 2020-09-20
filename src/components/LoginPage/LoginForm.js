import React, { Component } from 'react';
import axios from 'axios';

const login = (e) => {
  e.preventDefault();
  let request = {
    name: document.getElementById('name').value,
    password: document.getElementById('pwd').value,
  }
  axios.post('http://localhost:8000/users/', request)
    .then(resp => {
      alert(resp.data.message);
    })
    .catch(err => {
      console.log(err)
    })
}

class LoginForm extends Component {

  // handleFormSubmit(e) {
  //   e.preventDefault();

  //   console.log("FORM SUBMIT!");

  // }

  render() {
    return (
        <div className="container">
        <h2>Login form</h2>
        <form onSubmit={(e) => login(e)} className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-2" for="name">name:</label>
            <div className="col-sm-10">
              <input type="name" className="form-control" id="name" placeholder="Enter name" name="name" />
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
