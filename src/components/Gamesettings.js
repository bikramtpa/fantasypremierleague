import React from 'react'
import kane from './kane.jpg'
import '../App.css'

const Gamesettings = ({gamesettings}) => {
    return (
        <div className="w3-container">
            <center><h4>Clubs</h4></center>
            {/* typeof gamesettings */}
            {
                Object.keys(gamesettings).map((key, index) => (
                <div className="card">
                    <div className="card-body w3-card-4">
                        <h5 className="card-title"> {gamesettings[key].name} </h5>
                        <h6 className="card-subtitle mb-2 text-muted">Strength: {gamesettings[key].strength} || strength_attack_home: {gamesettings[key].strength_attack_home}</h6>
                        <ul>
                            <li>Strength_defence_home : {gamesettings[key].strength_defence_home}</li>
                            <li>Next match with : Unknown</li>
                            <li>pulse id : {gamesettings[key].pulse_id}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Gamesettings
