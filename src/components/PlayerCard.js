import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  Like  from '../components/Like'

export default class PlayerCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
          likeCount: 0
        };
      }

      upLike = () =>{
        const count = this.state.likeCount + 1
        this.setState({likeCount: count})
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
                <Like likes ={this.state.likeCount} upLike={this.upLike}/>
            </div>
        )
    }
}


