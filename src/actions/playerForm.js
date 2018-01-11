export const updatePlayerFormData = playerFormData => {
    return {
      type: 'UPDATED_PLAYER',
      playerFormData
    }
  }
  
  export const resetPlayerForm = () => {
    return {
      type: 'RESET_PLAYER_FORM'
    }
  }