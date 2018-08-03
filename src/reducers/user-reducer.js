import {UPDATE_USER} from '../actions/user-action'

export default function userReducer(state = '', {payload, type}) {
    switch (type) {
        case UPDATE_USER:
            return payload.user
        default:
            return state;
    }
}