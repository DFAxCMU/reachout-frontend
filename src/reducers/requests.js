const requests = (state = [], action) => {
    switch (action.type) {
        case 'ADD_REQUEST':
            const newRequest = action.payload.request;
            if (!newRequest) {
                return state;
            } else {
                let newState = state.slice();
                newState.push(newRequest);
                return newState;    
            }
        default:
            return state;
    }
}
  
export default requests;
