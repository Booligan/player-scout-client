import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerPage from '../components/PlayerPage';


const PlayerShow = ({player}) => {
        return(
            <div className="PlayerShow">
              <PlayerPage player={player} />
            </div>
        )
}

const mapStateToProps = (state, ownProps) => {
    const player = state.players.find(player => String(player.id) === ownProps.match.params.id)
    if (player){
        return {player: player}
    }else{
        return { player: {}}
    }
}


export default connect(mapStateToProps)(PlayerShow);
