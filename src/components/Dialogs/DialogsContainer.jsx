import React from 'react';
import {
   sendMessageCreator, updateNewMessageBodyCreator,
} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
        (store) => {
            let state = store.getState();
            let addMessage = () => {
                store.dispatch(sendMessageCreator())
            }
            let onMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }
            return  <Dialogs addMessage={addMessage}
                             dialogsPage={store.getState().dialogsPage}
                             updateNewMessageBodyCreator={onMessageChange}
            />
        }
    }
        </StoreContext.Consumer>


}

export default DialogsContainer