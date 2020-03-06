import {AuthAPI} from "../components/api/api"

const SET_USERS_DATA = 'SET_USERS_DATA';
const SET_LOGIN = 'SET_LOGIN';

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
                ...action.data,
                isAuth: true
            }
        case SET_LOGIN:
            return {
                ...state,
                ...action.formData
            }

        default:
            return state;
    }

}

export const setAuthUserData = (userId, email, login) =>  ({type: SET_USERS_DATA, data: {userId, email, login} })
export const setLogin = (formData) => ({type: SET_LOGIN, formData})

export const setAuth = () => {
    return (dispatch) => {
        AuthAPI.logIn().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }

        });
    }
}

export const toLogin = (formData) => {
    console.log(formData);
    return (dispatch) => {
        AuthAPI.Auth(formData).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setLogin(formData))
            }
        })
    }
}

export default authReduser;
