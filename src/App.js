import React, {
  Component
} from 'react';
import Data from './components/Data';
 import Events from './components/Events';
 import Elements from './components/Elements';
import './App.css';

const urls = [
  'http://localhost:8000/datas',
  'http://localhost:8000/events', 
  'http://localhost:8000/elements', 
  'https://fantasy.premierleague.com/api/fixtures/',
  'https://fantasy.premierleague.com/api/element-summary/1/',
  'https://fantasy.premierleague.com/api/event/1/live/'

]
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      events: [],
      elements: []
    };
  }

  componentDidMount() {
    let promisereturndatafiles = fetch(urls[0]);
    let promisereturneventsfile = fetch(urls[1]);
    let promisereturnelementsfile = fetch(urls[2]);
    
    Promise.all([promisereturndatafiles, promisereturneventsfile, promisereturnelementsfile])
      .then(async ([fordata, forevents, forelements]) => {
        const datas = await fordata.json();
        const events = await forevents.json();
        const elements = await forelements.json();
        return [datas, events, elements]
      })
      .then((responseText) => {
        console.log("responseText", responseText);
        console.log("data", responseText[0]);
        console.log("Hi", Object.values(responseText));
        console.log(responseText[1]);
        console.log("elements", responseText[2]);

        this.setState({
          data: responseText[0].picks,
          events: responseText[1].events,
          elements: responseText[2].elements,
        });
      }).catch((err) => {
        console.log(err);
      });
  }
  
  render() {
    return (
      <section className="main-container">
        <center className="main-header-center"><h3>Fantasy Premier League</h3></center>
        <div className="one">
          <Elements key={Math.random()} elements={this.state.elements} />
        </div>
        <div className="two">
          <Events key={Math.random()} events={this.state.events} />
        </div>
      </section>
      
    )
  }
}

export default App;
