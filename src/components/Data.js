import React from 'react'
import kane from './kane.jpg'
import '../App.css'

const Data = ({data}) => {
    return (
        <div className="w3-container">
            <center><h1>Players List</h1></center>
            {data.map((player) => (
                <div className="card">
                    <div className="card-body w3-card-4">
                        <h5 className="card-title"> Kevin De Bryane </h5>
                        <h6 className="card-subtitle mb-2 text-muted">Attacking Midfielder</h6>

                        <ul className="w3-ul">
                            <li className="w3-bar" key={data.element}>
                                 <img src = {kane} 
                                    className="w3-bar-item w3-circle w3-hide-small"
                                />
                                {player.element}
                                <li key={data.element}>{player.selling_price}</li>
                                <a href="#" className="card-link" > Previous Week </a>
                            <a href = "#" className = "card-link" > Next Week </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Data
