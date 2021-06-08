import axios from 'axios'
import {ActionTypes} from '../constants/actionTypes'

export const getUser = (payload) => async(dispatch) => {
    await axios
    .get(`https://api.github.com/users/${payload}`)
    .then((response) =>
        dispatch({
            type : ActionTypes.SET_USER,
            payload : response.data
        })
    ).catch((error) => {
        console.log(">> Error :", error);
        dispatch({
            type : ActionTypes.ERROR_SET_USER,
            payload : error
        })
    })
}