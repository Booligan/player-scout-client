import React from 'react';
import moment from 'moment';

const PlayerInfo = ({player}) =>(
    <div className="PlayerInfo">
        <h1>{player.first_name} {player.last_name}</h1>
        <img src={player.img_url} className="playerImage" />
        <div className="PlayerData">
            <h3>Born: {moment.utc(player.born).format('MMMM Do YYYY')}</h3>
            <h3>Height: {player.height} inches</h3>
            <h3>Weight: {player.weight} lbs</h3>
            <h3>Position: {player.position}</h3>
            <h3>National Team: {player.nat_team}</h3>        
            <h3>Club Team: {player.club_team}</h3>
        </div>
    </div>
)

export default PlayerInfo;
