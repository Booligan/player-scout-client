import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updatePlayerFormData } from '../actions/playerForm';
import { createPlayer } from '../actions/players';
import FormError from '../components/FormError';


class PlayerForm extends Component {

    handleOnChange = event => {
        const {name, value} = event.target;
        const currentPlayerFormData = Object.assign({}, this.props.playerFormData, {
          [name]: value
        })
        this.props.updatePlayerFormData(currentPlayerFormData)
      }

      handleOnSubmit = event => {
        event.preventDefault();
        const { createPlayer, playerFormData, history} = this.props;
            createPlayer(playerFormData, history);
      }

    render(){
        const { first_name, last_name, born, height, weight, position, nat_team, club_team, img_url} = this.props.playerFormData;
        return(
            <div>
                <h3>Player Form</h3>
                {this.props.errors === true ? <FormError />: null}
                <hr />
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="firstname">First Name<span className="fieldRequired"> *</span>:</label>
                        <input type='text'
                               onChange={this.handleOnChange}
                               name='first_name'
                               value={first_name} />
                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name<span className="fieldRequired"> *</span>:</label>
                        <input type='text'
                               onChange={this.handleOnChange}
                               name='last_name'
                               value={last_name} />
                    </div>
                    <div>
                        <label htmlFor="born">Born<span className="fieldRequired"> *</span>:</label>
                        <input type='date'
                               onChange={this.handleOnChange}
                               name='born'
                               value={born} />
                    </div>
                    <div>
                        <label htmlFor="height">Height(inches)<span className="fieldRequired"> *</span>:</label>
                        <input type='number'
                               onChange={this.handleOnChange}
                               name='height'
                               value={height} />
                    </div>
                    <div>
                        <label htmlFor="weight">Weight(lbs)<span className="fieldRequired"> *</span>:</label>
                        <input type='number'
                               onChange={this.handleOnChange}
                               name='weight'
                               value={weight} />
                    </div>
                    <div>
                        <label htmlFor="position">Position<span className="fieldRequired"> *</span>:</label>
                        <input type='text'
                               onChange={this.handleOnChange}
                               name='position'
                               value={position} />
                    </div>
                    <div>
                        <label htmlFor="nat_team">National Team<span className="fieldRequired"> *</span>:</label>
                        <input type='text'
                               onChange={this.handleOnChange}
                               name='nat_team'
                               value={nat_team} />
                    </div>
                    <div>
                        <label htmlFor="club_team">Club Team<span className="fieldRequired"> *</span>:</label>
                        <input type='text'
                               onChange={this.handleOnChange}
                               name='club_team'
                               value={club_team} />
                    </div>
                    <div>
                        <label htmlFor="img_url">Image URL<span className="fieldRequired"> *</span>:</label>
                        <input type='text'
                               onChange={this.handleOnChange}
                               name='img_url'
                               value={img_url} />
                    </div>
                    <Button type="submit" bsStyle='primary'>Submit</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        playerFormData: state.playerFormData,
        errors: state.errors
    }
}

export default connect(mapStateToProps, {updatePlayerFormData, createPlayer})(PlayerForm)
