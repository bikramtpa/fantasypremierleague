import React from 'react'
import '../App.css'

const AllPlayers = ({allPlayers}) => {
    return (
        <div className="w3-container">
            <center><h4>All-Player Details</h4></center>
            <div class="row">
                <div class="col col-tabs">
                    All Players
                </div>
                <div class="col col-tabs">
                G1 Against <a href="#" class="next round">›</a>
                </div>
            </div>
            {
                Object.keys(allPlayers).map((key, index) => (
                <div className="card">
                    <div className="card-body w3-card-4">
                        <ul className="inline">
                            <li className="li-left" key={Math.random()}>
                                {/* <img src={process.env.PUBLIC_URL + '/images/' + allPlayers[index].code + '.png'} alt="player" /> */}
                                {allPlayers[index]}
                            </li>
                            <li className="li-right" key={allPlayers[key]}>Man City.</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default AllPlayers
