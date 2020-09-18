import React, {useState} from 'react'

import '../App.css'
let json = require('../datasource/fixtures.json');
// Idea for matching http://localhost:8000/elements and https://fantasy.premierleague.com/api/fixtures/?event=1
// the elements has "team": 1, which is also in https://fantasy.premierleague.com/api/fixtures/?event=1
// "team": 1 is of the team "team_a": 1 for any given gameweek. or team_h

const MyPlayers = ({ myTeam, elements, myPlayersTeam, events, fixtures, clubs, buttonClick }) => {

const [count, setCount] = useState(0);

const handleClick = (e) => {
	e.preventDefault();
	return setCount(count + 1)
}

	const myTeamMatchAgainst = [];

	const handleCheck = () => {
	// console.log("hsdcvkshdvcvckashjvc", fixtures[0])
	for (var i = 0; i < myPlayersTeam.length; i++) {
		var found = false;
		for (var j = 0; j < 378; j++) {
			// console.log("loop me everything", events[j].id)
			// console.log("loop me everything", json[j].event)
			// console.log("salslasalslaslals", json[j].team_a)
			if (json[j].event === count + 1) {
				if (json[j].team_a === myPlayersTeam[i]) {
					found = true;
					// console.log(a[j].team_h)
					myTeamMatchAgainst.push(json[j].team_h)
					continue
				}
				if (json[j].team_h === myPlayersTeam[i]) {
					found = true
					// console.log(a[j].team_a)
					myTeamMatchAgainst.push(json[j].team_a)
					continue
				}
			}
		}
		if (found === false) {
			// console.log(0)
			myTeamMatchAgainst.push(0)
		}
	}
		// console.log("myTeamMatchAgainst", myTeamMatchAgainst.toString())
		return myTeamMatchAgainst
	}
handleCheck();
return (
	<div className="w3-container">
	<center><h4>My Team's Fixtures</h4></center>
	<div class="row">
			<div class="col col-tabs">
					My Players
			</div>
			<div class="col col-tabs">
			{Object.keys(fixtures).map(key => <p>{events[count].name}</p>)} <button onClick={handleClick} class="next round">&#8250;</button>
			</div>
	</div>
	{
			Object.keys(myTeam).map((key, index) => (
			<div className="card">
					<div className="card-body w3-card-4">
							<ul className="inline">
									<li className="li-left" key={Math.random()}>
													{elements[0][index]} <br />
													<span>
															({clubs[myPlayersTeam[index]]})
													</span>
									</li>
											<img className="right-team" width="50" height="50" src={process.env.PUBLIC_URL + '/clublogos/' + myTeamMatchAgainst[key] + '.jpg'} alt="player" />&nbsp;
											<b>({clubs[myTeamMatchAgainst[index]]})</b>
							</ul>
					</div>
			</div>
	))}
</div>
	)
};

export default MyPlayers