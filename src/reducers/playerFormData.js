const initialState = {
    first_name: null, 
    last_name: null, 
    born: null, 
    height: 0, 
    weight: 0, 
    position: null, 
    nat_team: null, 
    club_team: null, 
    img_url: null
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATED_PLAYER':
        return action.playerFormData
  
      case 'RESET_PLAYER_FORM':
        return initialState;
  
        default:
          return state;
    }
  }