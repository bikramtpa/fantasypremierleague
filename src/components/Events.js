import React, { useState } from 'react';
import kane from './kane.jpg'
import '../App.css'
import { getKeys } from 'eslint-visitor-keys';



// const clubs = ["Arsenal", "Aston Villa", "Brighton & Hove Albion", "Burnley", "Chelsea",
//     "Crystal Palace",
//     "Everton", "Fulham", "Leeds United", "Leicester City", "Liverpool", "Manchester City",
//     "Manchester United", "Newcastle United", "Sheffield United",
//     "Southampton", "Tottenham Hotspur", "West Bromwich Albion", "West Ham United",
//     "Wolverhampton", "Wanderers"
// ]

// Idea for Next button implementation for different gameweeks
// fixtures[0][eventsindex].event === 1  make this 1 dynamically change from UI or,
// Eveen better if it changes automatically when the current gameweek changes to 2,3.. somewhere in api could be
// and the condition for == null change to !== && ||
const Events = ({ events, fixtures }) => {
   //const keys = Object.keys(fixtures);
    const [count, setCount] = useState(0);
    function handleClick(e) {
        e.preventDefault();
        //console.log('The link was clicked.');
        return setCount(count + 1)
    }
    
    return (
        <div className="w3-container">
            
            <center><h4>Events</h4></center>
            {Object.keys(fixtures).map((key, index)  => (
                <div className="card" key={key}>
                    <div className="card-body w3-card-4">
                        <h5 className="card-title"> <span className="gameweeks-span">{events[count].name}</span>
                            <button onClick={handleClick} href="#" class="next round">&#8250;</button></h5>
                            {/*<p>You clicked {count} times</p> */}
                        
                        <h6 className="card-subtitle mb-2 text-muted">{Object.keys(events).map((key, eventsindex) => {
                            //for (let i = 0; i <= eventsindex; i++) {
                            
                            // if (fixtures[0][eventsindex].event == null || fixtures[0][eventsindex].event === 1) {
                            //     return <ul class="list-group"> <li class="list-group-item"> {fixtures[0][0].team_h} VS {fixtures[0][0].team_a} </li></ul>
                            // }
                            if (fixtures[0][eventsindex].event === count +1) {
                                return  <ul class="list-group">
                                            <li class="list-group-item">
                                                <img width="50" height="50" src={process.env.PUBLIC_URL + '/clublogos/' + fixtures[0][eventsindex].team_h + '.jpg'} alt = "player" />
                                                {fixtures[0][eventsindex].team_h} VS {fixtures[0][eventsindex].team_a}
                                                <img width="50" height="50" src={process.env.PUBLIC_URL + '/clublogos/' + fixtures[0][eventsindex].team_a + '.jpg'} alt = "player" />
                                            </li>
                                        </ul>
                            }
                        })}
                        </h6>
                        <ul className="w3-ul">
                            <li className="w3-bar" key={events[key].id}>
                                <img src={kane} alt="player" className="w3-bar-item w3-circle w3-hide-small" />
                                <span>
                                    Most Selected: {events[key].most_selected} % <br />
                                    Chip Plays: {events[key].chip_plays}  <br />
                                </span>
                            </li>
                           
                            <li className="w3-bar" key={events[index].id}>
                                DeadLine: {events[key].deadline_time}
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Events
