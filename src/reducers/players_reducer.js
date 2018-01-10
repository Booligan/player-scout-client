export default (state = [], action) => {
    switch(action.type){
        case 'GET_PLAYERS_SUCCESS':
            return action.players;
        default:
            return state;
    }
}