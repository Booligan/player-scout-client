import React from 'react';

const Like = ({likes, upLike}) => {
    return(
        <div >
         <button onClick = {() =>{upLike()}} >Like</button>
         <h3>Likes: {likes}</h3>
        </div>
    )
}

export default Like;