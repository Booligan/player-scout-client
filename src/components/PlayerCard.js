import React from 'react';

const PlayerCard = ({player}) =>(
    <div key={player.id} className="PlayerCard">
        <h3>{player.first_name} {player.last_name}</h3>
        <p>National Team: {player.nat_team}</p>
        <p>Club Team: {player.club_team}</p> 
    </div>
)

export default PlayerCard;