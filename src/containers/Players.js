import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerCard from '../components/PlayerCard'
import { getPlayers } from '../actions/players';

class Players extends Component{

    componentDidMount(){
        this.props.getPlayers()
    }

    render(){
        return(
            <div className="PlayersContainer">
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
