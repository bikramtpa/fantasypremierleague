import React from 'react'
import kane from './kane.jpg'
import '../App.css'

const Events = ({events}) => {
    return (
        <div className="w3-container">
            <center><h4>Events</h4></center>
            {Object.keys(events).map((key, index) => (
                <div className="card" key={index}>
                    <div className="card-body w3-card-4">
                        <h5 className="card-title"> {events[key].name} </h5>
                        <h6 className="card-subtitle mb-2 text-muted">Manchester City || Opponent: Liverpool</h6>

                        <ul className="w3-ul">
                            <li className="w3-bar" key={events[key].id}>
                                <img src={kane} alt="player" className="w3-bar-item w3-circle w3-hide-small" />
                                <span>
                                Most Selected: {events[key].most_selected} % <br />
                                Chip Plays: {events[key].chip_plays}  <br />
                                </span>
                            </li>
                            <li className="w3-bar" key={events[key].id}>
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
