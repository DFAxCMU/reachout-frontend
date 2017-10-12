export const toggleSidebar = () => ({
    type: 'TOGGLE_SIDEBAR',
})

export const addRequest = request => ({
    type: 'ADD_REQUEST', 
    payload: {
        request: request
    },
})