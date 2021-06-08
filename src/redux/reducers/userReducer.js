import {ActionTypes} from '../constants/actionTypes'

const initialState = {
    user : []
}

export const getUserReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case ActionTypes.SET_USER:
            return {...state, ...action.payload}
        default:
            return state
    }
}