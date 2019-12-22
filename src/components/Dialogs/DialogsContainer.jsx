import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import {
   sendMessageCreator, updateNewMessageBodyCreator,
} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();
    let addMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <Dialogs addMessage={addMessage}
                 dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 updateNewMessageBodyCreator={onMessageChange}
                 newMessagesBody={state.dialogsPage.newMessageBody}/>
    )
}

export default DialogsContainer