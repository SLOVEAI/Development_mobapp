
import { LOAD_USER, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGOUT_USER, LOGOUT_USER_FAIL, REGISTER_USER, REGISTER_USER_FAIL, REGISTER_USER_REQUEST } from "./Constant";

const initialState = {
    user: null,
    error: null,
    message: {}
};

export default function AuthReducer(state = initialState, actions) {
    switch (actions.type) {
        case REGISTER_USER_REQUEST:
        case LOGIN_USER_REQUEST:
            case LOAD_USER_REQUEST:
            return {
                loading: true
            };

        case LOGIN_USER:
            case LOAD_USER:
            return {
                loading: false,
                isAuthenticated: true,
                user: actions.payload,
                success: true
            };

        case REGISTER_USER:
            return {
                loading: false,
                isAuthenticated: false,
                success: true
            };

        case LOGOUT_USER:
            return {
                ...state,
                loading: false,
                user: null,
                isAuthenticated: false
            };

        case REGISTER_USER_FAIL:
        case LOGIN_USER_FAIL:
            case LOAD_USER_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: actions.payload,
                success: false
            };


        case LOGOUT_USER_FAIL:
            return {
                error: actions.payload,
                loading: false,
                isAuthenticated: true
            };

        default:
            return state;
    }
}