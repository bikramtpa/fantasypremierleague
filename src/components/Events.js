import React from 'react'
import kane from './kane.jpg'
import '../App.css'
import { getKeys } from 'eslint-visitor-keys';



const clubs = ["Arsenal", "Aston Villa", "Brighton & Hove Albion", "Burnley", "Chelsea",
    "Crystal Palace",
    "Everton", "Fulham", "Leeds United", "Leicester City", "Liverpool", "Manchester City",
    "Manchester United", "Newcastle United", "Sheffield United",
    "Southampton", "Tottenham Hotspur", "West Bromwich Albion", "West Ham United",
    "Wolverhampton", "Wanderers"
]
const Events = ({ events, fixtures }) => {
   //const keys = Object.keys(fixtures);
    
    return (
        <div className="w3-container">
            
            <center><h4>Events</h4></center>
            {Object.keys(fixtures).map((key, index)  => (
                <div className="card" key={index}>
                    <div className="card-body w3-card-4">
                        <h5 className="card-title"> {events[index].name} <a href="#" class="next round">&#8250;</a></h5>
                        
                        <h6 className="card-subtitle mb-2 text-muted">{Object.keys(events).map((key, eventsindex) => {
                            for (let i = 0; i <= eventsindex; i++) {
                                if (fixtures[0][eventsindex].event == null || fixtures[0][eventsindex].event === 1) {
                                    return <ul class="list-group"> <li class="list-group-item"> {fixtures[0][eventsindex].team_h} VS {fixtures[0][eventsindex].team_a} </li></ul>
                                }
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
