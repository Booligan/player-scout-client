import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { deletePlayer } from '../actions/players';
import PlayerInfo from '../components/PlayerInfo'


class PlayerShow extends Component{

    handleOnClick = (event,playerID, history) =>{
        event.preventDefault();
        debugger
        deletePlayer(playerID,history);
    }

    render(){
        const { player, history } = this.props;
        return(
            <div className="PlayerShow">
              <Button onClick={(e) => this.handleOnClick(e, player.id, history)} bsStyle="danger">Delete { player.first_name} </Button>
              <PlayerInfo player = {player} />              
            </div>
        )
    }   
}

const mapStateToProps = (state, ownProps) => {
    const player = state.players.find(player => String(player.id) === ownProps.match.params.id)
    if (player){
        return {player: player}
    }else{
        return { player: {}}
    }
}


export default connect(mapStateToProps,{deletePlayer})(PlayerShow);
