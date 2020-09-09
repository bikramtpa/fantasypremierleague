import React from 'react'
//import kane from './kane.jpg'
import '../App.css'

const Elements = ({ elements }) => {
    return (
        <div className="w3-container">
            <center><h4>Player's Details</h4></center>
            {
                Object.keys(elements).map((key, index) => (
                    
                <div className="card">
                    <div className="card-body w3-card-4">
                        <h5 className="card-title"> {elements[key].name} </h5>
                        <ul className="w3-ul">
                            <li className="w3-bar" key={elements[key].id}>
                               <img src = {process.env.PUBLIC_URL + '/images/' + elements[key].code + '.png'} alt="player"/>
                                    <span>
                                        Total Points: {elements[key].total_points} <br />
                                        Goal Scored: {elements[key].goals_scored} <br />
                                        Assists: {elements[key].assists} <br />
                                        Goals Conceded: {elements[key].goals_conceded} <br />
                                        Points/Game: {elements[key].points_per_game} <br />
                                        Selected by: {elements[key].selected_by_percent}%
                                    </span>
                                    <li className="w3-bar" key={elements[key].id}>
                                 Player: {elements[key].first_name} {elements[key].second_name}
                                </li>
                            </li>
                            <li className="w3-bar" key={elements[key].id}>
                                Team: {elements[key].team}, 
                                Team Code: {elements[key].team_code}
                            </li>
                            <a href="#" className="card-link btn btn-outline-primary btn-sm" > Previous Week </a>
                            <a href = "#" className = "card-link btn btn-primary btn-sm" > Next Week </a>
                            </ul>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Elements
