const initialState = {
    first_name: '', 
    last_name: '', 
    born: null, 
    height: 0, 
    weight: 0, 
    position: '', 
    nat_team: '', 
    club_team: '', 
    img_url: ''
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