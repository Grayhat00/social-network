import {AuthAPI} from "../components/api/api";
import {stopSubmit} from "redux-form";

const SET_USERS_DATA = 'SET_USERS_DATA';

let initialState =  {
    usersId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReduser = (state = initialState, action) => {
    switch (action.type ) {
        case 'SET_USERS_DATA':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) =>
    ({type: SET_USERS_DATA, payload: {userId, email, login, isAuth} })

export const setAuth = () => (dispatch) => {
        AuthAPI.logIn()
            .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });

        return "Yo yo";
}

export const toLogin = (email, password, rememberMe) => (dispatch) => {

        AuthAPI.Auth(email, password, rememberMe)
            .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuth());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: "message"}));
            }
        });
}

export const Logout = () => {
    return (dispatch) => {
        AuthAPI.Logout().then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
    }
}

export default authReduser;
