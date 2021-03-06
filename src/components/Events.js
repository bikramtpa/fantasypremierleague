import React, { useState } from 'react';
import '../App.css'
// import { getKeys } from 'eslint-visitor-keys';





// Idea for Next button implementation for different gameweeks
// fixtures[0][eventsindex].event === 1  make this 1 dynamically change from UI or,
// Eveen better if it changes automatically when the current gameweek changes to 2,3.. somewhere in api could be
// and the condition for == null change to !== && ||
const Events = ({ events, fixtures, clubs }) => {
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
            {Object.keys(fixtures).map((key, index) => (

                <div className="card" key={key}>
                    <div className="card-body w3-card-4">
                        <h5 className="card-title"> <span className="gameweeks-span">{events[count].name}</span>
                            <button onClick={handleClick} class="next round">&#8250;</button></h5>

                        <h6 className = "card-subtitle mb-2 text-muted" > {
                            Object.keys(events).map((key, eventsindex) => {

                            if (fixtures[0][eventsindex].event === count + 1) {
                                return  <ul class="list-group">
                                            <li class="list-group-item">
                                                <img className="left-team" width="50" height="50" src={process.env.PUBLIC_URL + '/clublogos/' + fixtures[0][eventsindex].team_h + '.jpg'} alt = "player" />
                                                <span className="fixture-text-center">{clubs[fixtures[0][eventsindex].team_h]} VS {clubs[fixtures[0][eventsindex].team_a]}</span>
                                                <img className="right-team" width="50" height="50" src={process.env.PUBLIC_URL + '/clublogos/' + fixtures[0][eventsindex].team_a + '.jpg'} alt = "player" />
                                            </li>
                                        </ul>
                            }
                            return <p></p>
                        })}
                        </h6>
                        DeadLine: {
                                <p>{new Date(events[count].deadline_time).toDateString()}</p>
                            }
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Events
