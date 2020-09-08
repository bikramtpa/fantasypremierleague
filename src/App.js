import React, {
  Component
} from 'react';
import Data from './components/Data';
 import Events from './components/Events';
import './App.css';
// const fs = require('fs');
// import fs from 'fs'

const urls = [
  'http://localhost:8000/datas',
  'http://localhost:8000/events'
]
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      events: []
    };
  }

  componentDidMount() {
    let promisereturndatafiles = fetch(urls[0]);
    let promisereturneventsfile = fetch(urls[1]);
    
    Promise.all([promisereturndatafiles, promisereturneventsfile])
      .then(async ([fordata, forevents]) => {
        const datas = await fordata.json();
        const events = await forevents.json();
        return [datas, events]
      })
      .then((responseText) => {
        console.log("responseText", responseText);
        console.log("data", responseText[0]);
        console.log("Hi", Object.values(responseText));
        console.log(responseText[1]);

        this.setState({
          data: responseText[0].picks,
          events: responseText[1].events,
        });
      }).catch((err) => {
        console.log(err);
      });
  }
  
  render() {
    return (
      <div>
        <Data key={Math.random()} data={this.state.data} />
        <Events key={Math.random()} events={this.state.events} />
      </div>
    )
  }
}

export default App;
