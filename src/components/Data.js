import React from 'react'
import '../App.css'

const Data = ({ myTeam, elements }) => {
    
    return (
        <div className="w3-container">
            <center><h4>Players</h4></center>
            {
                Object.keys(myTeam).map((key, index, arrayobj) => (
                <div className="card" key={index}>
                    <div className="card-body w3-card-4">

                        <ul className="w3-ul">
                                <li className="w3-bar" key={Math.random()}>
                                    <img src={process.env.PUBLIC_URL + '/images/' + myTeam[index] + '.png'} alt="player" />
                                    
                                    total Points: {elements[1][index]} <br />
                                    selected By: {elements[2][index]} %<br />
                                    nowCost: {(elements[3][index])/10} £<br />
                                    assists: {(elements[4][index])} <br />
                                    <b>goalsScored: {(elements[5][index])}</b> <br />
                            </li>
                                <li className="w3-bar" key={myTeam[key].element}>Second Name: <b>{elements[0][index]}</b> <br /></li>
                                <a href="#" className="card-link btn btn-outline-primary btn-sm"> Previous Week </a>
                                <a href = "#" className = "card-link btn btn-primary btn-sm"> Next Week </a>
                        </ul>
                        
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Data
