import React from 'react'
import kane from './kane.jpg'
import '../App.css'

const Events = ({events}) => {
    return (
        <div className="w3-container">
            <center><h2>Events</h2></center>
            {Object.keys(events).map((key, index) => (
                <div className="card">
                    <div className="card-body w3-card-4">
                        <h5 className="card-title"> Kevin De Bryane </h5>
                        <h6 className="card-subtitle mb-2 text-muted">Attacking Midfielder</h6>

                        <ul className="w3-ul">
                            <li className="w3-bar">
                                 <img src={kane} alt="player" className="w3-bar-item w3-circle w3-hide-small"/>
                                {events[key].name}
                            </li>
                        </ul>
                        
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Events
