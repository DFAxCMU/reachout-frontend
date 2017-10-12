const sidebar = (state = false, action) => {
    switch (action.type) {
      case 'TOGGLE_SIDEBAR':
        const newState = !state;
        return newState;
      default:
        return state;
    }
}
  
export default sidebar;