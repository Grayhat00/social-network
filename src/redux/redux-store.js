import {combineReducers, createStore, applyMiddleware} from "redux";
import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import sidebarReduser from "./sidebar-reduser";
import usersReduser from "./user-reduser";
import authReduser from "./auth-reduser";
import  thunkMiddleware from "redux-thunk";
import {reducer as fromReducer} from "redux-form"
import appReduser from "./app-reduser";


let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form: fromReducer,
    app: appReduser
});

 let store = createStore(reducers, applyMiddleware(thunkMiddleware));

 window.store = store;

export default store;