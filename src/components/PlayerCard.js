import React from 'react';
import { Link } from 'react-router-dom';

const PlayerCard = ({player}) =>(
    <Link to={`/players/${player.id}`} exact >                    
        <div key={player.id} className="PlayerCard">
            <img className="PlayerImage" src={player.img_url} alt={player.last_name} />
            <h3>{player.first_name} {player.last_name}</h3>
        </div>
    </Link> 
)

export default PlayerCard;
