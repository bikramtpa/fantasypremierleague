import React from 'react'
import '../App.css'

const MyPlayers = ({elements}) => {
    return (
        <div className="w3-container">
            <center><h4>My-Player Details</h4></center>
            {
                Object.keys(elements).map((key, index, arrayobj) => (
                <div className="card">
                    <div className="card-body w3-card-4">

                        <ul className="w3-ul">
                                <li className="w3-bar" key={Math.random()}>
                                    <img src={process.env.PUBLIC_URL + '/images/' + elements[index] + '.png'} alt="player" />
                                    
                                {elements[index]}
                            </li>
                            <li className="w3-bar" key={elements[key].element}>purchase_price: {elements[key].purchase_price}</li>
                        </ul>
                         <a href="#" className="card-link"> Previous Week </a>
                         <a href = "#" className = "card-link"> Next Week </a>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default MyPlayers
