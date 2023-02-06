import { CREATE_USER_SUCCESS, LOGIN_SUCCESS, LOGOUT, LOGIN_FAILURE } from '../Types';
const initState = {
    isUserLogin: false,
    UserData: null
};
const AuthReducer = (state = initState, action) => {
    switch (action.type) {
     
        case CREATE_USER_SUCCESS:
            console.log("CREATE_USER_SUCCESS")
            return {
                ...state,
                UserData: action.payload,
                isUserLogin: true

            };
        case LOGIN_SUCCESS:
            console.log("LOGIN_SUCCESS")
            return {
                ...state,
                UserData: action.payload,
                isUserLogin: true
            };
        case LOGIN_FAILURE:
            console.log("LOGIN_FAILURE")
            return {
                ...state,
                UserData: action.payload,
                isUserLogin: false
            };
        case LOGOUT:
            console.warn("LOGOUT")
            return {
                UserToken: false,
                UserData: null,
                isUserLogin: false
            };
        default:
            return state;
    }
};

export default AuthReducer;