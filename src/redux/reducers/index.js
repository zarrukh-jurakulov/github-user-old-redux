import {combineReducers} from 'redux'
import {getUserReducer} from './userReducer'

const reducer = combineReducers({
    user : getUserReducer
})

export default reducer