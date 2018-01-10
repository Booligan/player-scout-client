import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerForm extends Component {
    render(){
        return(
            <div>
                Add A Player to your Roster
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="firstname">First Name:</label>
                    </div>
                </form>
            </div>    
        )
    }
}

export default PlayerForm;