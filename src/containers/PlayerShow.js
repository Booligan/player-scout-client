import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { deletePlayer } from '../actions/players';


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
              <h1>{ player.first_name} { player.last_name}</h1>
              <Button onClick={(e) => this.handleOnClick(e, player.id, history)} bsStyle="danger">Delete { player.first_name} </Button>              
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
