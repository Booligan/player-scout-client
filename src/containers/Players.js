import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerCard from '../components/PlayerCard'
import { getPlayers } from '../actions/players';
import { Link } from 'react-router-dom';


class Players extends Component{

    componentDidMount(){
        this.props.getPlayers()
    }

    render(){
        return(
            <div className="PlayersContainer">
                <Link to="/players/new" className="add" exact >Add a player</Link>
                <h1>Players</h1>
                {this.props.players.map(player => <PlayerCard key={player.id} player={player} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        players: state.players
    })
}

export default connect(mapStateToProps, { getPlayers })(Players);
