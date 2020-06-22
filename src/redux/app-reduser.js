import {AuthAPI} from "../components/api/api";
import {stopSubmit} from "redux-form";
import {setAuth} from "./auth-reduser";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState =  {
    initialized: false
};

const appReduser = (state = initialState, action) => {
    switch (action.type ) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: false
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp  = () => (dispatch) => {
    let promise = dispatch(setAuth());
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess());
    });
}


export default appReduser;
