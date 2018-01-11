import { resetPlayerForm } from './playerForm';

const API_URL = process.env.REACT_APP_API_URL;

export const setPlayers = players => {
    return{
        type: 'GET_PLAYERS_SUCCESS',
        players
    }
}

export const getPlayers = () => {
    return dispatch => {
        return fetch(`${API_URL}/players`)
        .then(response => response.json())
        .then(players => dispatch(setPlayers(players)))
        .catch(error => console.log(error))
    }
}

export const addPlayer = player => {
    return {
      type:'CREATE_PLAYER',
      player
    }
  }

export const removePlayer = player => {
  return {
    type: 'REMOVE_PLAYER',
    player
  }
}

export const createPlayer = (player, routerHistory) => {
    return dispatch => {
      return fetch(`${API_URL}/players`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({player: player})
      })
      .then(handleErrors)
      .then(response => response.json())
      .then(player => {
        dispatch(addPlayer(player))
        dispatch(resetPlayerForm())
        routerHistory.replace(`/players`)
      })
      .catch(error => {
        dispatch({type: 'ERROR'})
        routerHistory.replace(`/players/new`)
       })
    }
  }

  function handleErrors(response){
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  export const deletePlayer = (playerID, routerHistory) => {
    const request = new Request(`${API_URL}/players/${playerID}`, {
      method: 'DELETE'
    });
    
    return fetch(request).then(response =>{
      removePlayer(playerID);
      routerHistory.replace('/players');
    }).catch(error =>{
      return error;
    });
  }
