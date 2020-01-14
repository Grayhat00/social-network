import {combineReducers, createStore} from "redux";
import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import sidebarReduser from "./sidebar-reduser";
import usersReduser from "./user-reduser";
import authReduser from "./auth-reduser";


let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser,
    auth: authReduser
});

 let store = createStore(reducers);

 window.store = store;

export default store;