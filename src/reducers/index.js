import { combineReducers } from 'redux'
import sidebar from './sidebar.js'
import requests from './requests.js'

const appReducer = combineReducers({
    sidebar,
    requests,
})

export default appReducer
