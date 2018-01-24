import React from 'react';

const Like = ({player, upLike}) => {
    return(
        <div className="likeContainer" >
         <button className="likeButton" onClick = {() =>{upLike()}} >Like</button>
         <h3>Likes: {player.likes}</h3>
        </div>
    )
}

export default Like;