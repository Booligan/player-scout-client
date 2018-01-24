import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  Like  from '../components/Like'
import { likePlayer } from '../actions/players';


class PlayerCard extends Component{

      upLike = () =>{
        const {player, likePlayer} = this.props
        const updatedPlayerLikes = Object.assign(...player, {likes: player.likes + 1}) 
        likePlayer(player.id,updatedPlayerLikes)
      }

    render(){
        const {player} = this.props
        return(
            <div>
                <Link to={`/players/${player.id}`} exact >                    
                    <div key={player.id} className="PlayerCard">
                    <img className="PlayerImage" src={player.img_url} alt={player.last_name} />
                    <h3>{player.first_name} {player.last_name}</h3>
                    </div>
                </Link> 
                <Like player = {player} upLike = {this.upLike} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        players: state.players
    })
}

export default connect(mapStateToProps, {likePlayer} )(PlayerCard);


