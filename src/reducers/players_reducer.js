export default (state = [], action) => {
    switch(action.type){
        case 'GET_PLAYERS_SUCCESS':
            return action.players;
        case 'REMOVE_PLAYER':
            return state.filter(player => player.id !== action.player.id)
        case 'LIKE_PLAYER':
            return state.map((player) => {
              if (player.id === action.player.id) {
                return action.player
              } else {
                return player
              }
            });
        default:
            return state;
    }
}
