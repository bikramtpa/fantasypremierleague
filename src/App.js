import React, {Component} from 'react';
import Data from './components/Data';
import Events from './components/Events';
import MyPlayers from './components/MyPlayers';
import './App.css';

const urls = [
  'http://localhost:8000/bootstrap-static',
  'http://localhost:8000/my-team',
  'http://localhost:8000/events', 
  'http://localhost:8000/elements', 
  'http://localhost:8000/gamesettings',
  'http://localhost:8000/fixtures',
  'http://localhost:8000/gameweeks',
  'https://fantasy.premierleague.com/api/fixtures/',
  'https://fantasy.premierleague.com/api/element-summary/1/',
  'https://fantasy.premierleague.com/api/event/1/live/',
  'https://fantasy.premierleague.com/api/me/'

]
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myTeam: [],
      events: [],
      elements: [],
      fixtures: [],
      gameweeks: [],
      allPlayers: [],
      myPlayersTeam: [],
      MyTeamMatchagainst: [],
    };
  }

  componentDidMount() {
    let promisereturndatafiles = fetch(urls[0]);
    let promisereturneventsfile = fetch(urls[1]);
    let promisereturnelementsfile = fetch(urls[2]);
    let promisereturngamesettingsfile = fetch(urls[3]);
    let promisereturnfixturesfile = fetch(urls[5]);
    let promisereturngameweeks = fetch(urls[6]);
    
    Promise.all([promisereturndatafiles, promisereturneventsfile, promisereturnelementsfile, promisereturngamesettingsfile, promisereturnfixturesfile, promisereturngameweeks])
      .then(async ([fordata, forevents, forelements, forgamesettings, forfixtures, forgameweeks]) => {
        const datas = await fordata.json();
        const events = await forevents.json();
        const elements = await forelements.json();
        const gamesettings = await forgamesettings.json();
        const fixtures = await forfixtures.json();
        const gameweeks = await forgameweeks.json();
        return [datas, events, elements, gamesettings, fixtures, gameweeks]
      })
      .then((responseText) => {

        // make result that has both picks.element from my-team and elements.id from elements
        // lols could have made use of picture = data.find(x => x.id == SOME_ID).pic :)

        let picks = responseText[1].picks;
        let elements = responseText[0].elements;
        let fixtures = responseText[4];
        let events = responseText[0].events;
        let allplayers = responseText[0].elements;
        console.clear();
        allplayers = Object.keys(allplayers).map((key, index) => allplayers[key].first_name)

        let tofindfrommyTeam = Object.keys(picks).map((key, index) => { return  picks[key].element });
        let tofindfromElements = Object.keys(elements).map((key, index) => { return elements[key].id });
        
        Array.prototype.diff = function (tofindfrommyTeam) {
          var ret = [];
          for (var i in this) {
            if (tofindfrommyTeam.indexOf(this[i]) > -1) {
              ret.push(this[i]);
            }
          }
          return ret;
        };

        let forimg = tofindfromElements.diff(tofindfrommyTeam)
        
        const imgcode = [];
        const playerdetails = [];
        const totalPoints = [];
        const selectedPercentage = [];
        const nowCost = [];
        const assists = [];
        const goalsScored = [];
        const myPlayersTeam = [];

        const teamhome = Object.keys(fixtures).map(key => fixtures[key].team_h); 
        teamhome.splice(0, 2);
        const teamaway = Object.keys(fixtures).map(key => fixtures[key].team_a); 
        teamaway.splice(0, 2);

        Object.keys(elements).forEach((key, index) => {
          for (let i = 0; i < forimg.length; i++) {
            if (elements[key].id === forimg[i]) {
              imgcode.push(elements[key].code);
              // for(let k in elements)
              // playerdetails.push(k);
              let first_name = elements[key].first_name;
              let second_name = elements[key].second_name;
              playerdetails.push(first_name + " " + second_name);
              totalPoints.push(elements[key].total_points);
              selectedPercentage.push(elements[key].selected_by_percent);
              nowCost.push(elements[key].now_cost);
              assists.push(elements[key].assists);
              goalsScored.push(elements[key].goals_scored);

              myPlayersTeam.push(elements[key].team);
            }
          }
        })
        // console.log("myPlayersTeam----------", myPlayersTeam)
        // console.log("fixtures", fixtures)
        const eachevents = fixtures;
        let against = [];
        // eachevents[key].event === 1 this 1 has to be dynamic for 38 matches.
        // slice also depending on how many games are played in a single game week
        Object.keys(eachevents).forEach((key, index) => {
          for (let i = 0; i < myPlayersTeam.length; i++) {
            if (eachevents[key].event === 1) {
              let found_index1 = teamaway.slice(0, 8).indexOf(myPlayersTeam[i]);
              let found_index2 = teamhome.slice(0, 8).indexOf(myPlayersTeam[i]);

              let pos = (teamhome[found_index1] || teamaway[found_index2]) || 0;
              against.push(pos);
            }
          }
          }
        )
        
        this.setState({
          myTeam: imgcode,
          events: events,
          elements: [playerdetails, totalPoints, selectedPercentage, nowCost, assists, goalsScored],
          fixtures: [fixtures],
          allPlayers: allplayers,
          myPlayersTeam: myPlayersTeam,
          MyTeamMatchagainst: against
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
        <Data myTeam={this.state.myTeam} elements={this.state.elements}/>
        </div>
        <div className="two">
        <Events events={this.state.events} fixtures={this.state.fixtures}/>
        <MyPlayers myTeam={this.state.myTeam} elements={this.state.elements} myPlayersTeam={this.state.myPlayersTeam} MyTeamMatchagainst={this.state.MyTeamMatchagainst} events={this.state.events} fixtures={this.state.fixtures}/>
        </div>
      </section>
      
    )
  }
}

export default App;