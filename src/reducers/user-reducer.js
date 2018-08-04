import {API_REQUEST_ERROR, API_REQUEST_SUCCESS} from '../actions/user-action'

export default function userReducer(state = '', {payload, type}) {
    switch (type) {
        case API_REQUEST_SUCCESS:
            return payload.user
        case API_REQUEST_ERROR:
            return payload.user
        default:
            return state;
    }
}