import React from 'react';


const PlayerPage = ({player}) =>(
    <div>
        <h1>{player.first_name} {player.last_name}</h1>
    </div> 
)

export default PlayerPage;