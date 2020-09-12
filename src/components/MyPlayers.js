import React from 'react'
import '../App.css'

const MyPlayers = ({myTeam, elements}) => {
    return (
        <div className="w3-container">
            <center><h4>My Team's Fixtures</h4></center>
            <div class="row">
                <div class="col col-tabs">
                    All Players
                </div>
                <div class="col col-tabs">
                G1 Against <a href="#" class="next round">›</a>
                </div>
            </div>
            {
                Object.keys(myTeam).map((key, index) => (
                <div className="card">
                    <div className="card-body w3-card-4">
                        <ul className="inline">
                            <li className="li-left" key={Math.random()}>
                                {elements[0][index]}
                            </li>
                            <li className="li-right" key={myTeam[key]}>Man City.</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default MyPlayers
