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
      .then(files => {
        console.log("the files", files);
        files.forEach(file => {
          process(file.json());
        })
      })
      .catch(error => console.error(error));
    let process = (prom) => {
      prom.then(item => {
        console.log(typeof item)
        console.log("item is", item.picks)
        console.log("Just Item", item)
        
        console.log("Item keys", item)
        console.log("Item values", Object.values(item))
        console.log("Item value 1", Object.values(item)[1])
        this.setState({
          data: item[Object.keys(item)[0]],
          events: [{
            status_for_entry: "available",
            played_by_entry: Array(0),
            name: "bboost",
            number: 1
          }]
          
        });
        
      })
    } 
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
