import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlayer } from '../actions/players';
import PlayerPage from '../components/PlayerPage';


class PlayerShow extends Component{

    componentDidMount(){
      this.props.getPlayer(this.props.match.params.id);
    }

    render(){
        return(
            <div className="PlayerShow">
              <PlayerPage player={this.props.player} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        player: state.players
    })
}

export default connect(mapStateToProps, { getPlayer })(PlayerShow);
