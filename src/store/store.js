import {createStore , combineReducers } from 'redux'
import calcReducers from '../reducers/calcReducer'

const configStore = () => {
    const store = createStore(combineReducers({
        calc : calcReducers
    }))
    return store
}

export default configStore