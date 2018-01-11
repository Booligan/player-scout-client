export default (state = [], action) => {
    switch(action.type){
        case 'GET_PLAYERS_SUCCESS':
            return action.players;
        case 'REMOVE_PLAYER':
            return state.filter(player => player.id !== action.id)
        default:
            return state;
    }
}