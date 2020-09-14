import React from 'react'
import '../App.css'

// Idea for matching http://localhost:8000/elements and https://fantasy.premierleague.com/api/fixtures/?event=1
// the elements has "team": 1, which is also in https://fantasy.premierleague.com/api/fixtures/?event=1
// "team": 1 is of the team "team_a": 1 for any given gameweek. or team_h

const MyPlayers = ({ myTeam, elements, myPlayersTeam, events, fixtures, MyTeamMatchagainst }) => {
    const handleClick = () => {
        //e.preventDefault();
        //console.log('The link was clicked.');
        let count;
        for (var input = 1; input <= 10; input++) {
            count = input;
        }
        return count
    }
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
                           <img className="right-team" width="50" height="50" src={process.env.PUBLIC_URL + '/clublogos/' +  MyTeamMatchagainst[key] + '.jpg'} alt = "player" />
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default MyPlayers
