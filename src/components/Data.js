import React from 'react'
import '../App.css'

const Data = ({ myTeam, elements }) => {
    
    return (
        <div className="w3-container">
            <center><h4>My FPL Team Players</h4></center>
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
                            <li className="w3-bar" key={myTeam[key].element}><b>{elements[0][index]}</b> <br /></li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Data
