import { LoginActionTypes } from './actionTypes'

const userState = {
    user: null
}

export function userReducer(state = userState, action) {
    switch (action.type) {
        case LoginActionTypes.LOGGED_IN:
            return Object.assign({}, state, {
                user: action.user
            });
        case LoginActionTypes.LOGGED_LOGOUT:
            return Object.assign({}, state, {
                user: null
            });
        default:
            return state
    }
}
