import React from 'react';

const PlayerCard = ({player}) =>(
    <div key={player.id} className="PlayerCard">
        <img className="PlayerImage" src={player.img_url} alt={player.last_name} />
        <h3>{player.first_name} {player.last_name}</h3>
    </div>
)

export default PlayerCard;
