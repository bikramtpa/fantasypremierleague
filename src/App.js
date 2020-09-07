import React, {
  Component
} from 'react';
import Data from './components/Data';
import './App.css';
// const fs = require('fs');
// import fs from 'fs'
// http: //jsonplaceholder.typicode.com/users

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/')
      .then(res => res.json())
      .then((data) => {
        console.log(typeof data)
        console.log(data);

        this.setState({
          data: data.picks
        })
      })
      .catch(console.log)
  }
  render() {
    return (
      <div>
        <Data key = {this.state.data.element} data = {this.state.data}/> 
      </div>
    )
  }

}

export default App;
// content type application/json