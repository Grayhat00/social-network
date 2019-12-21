import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import {
   sendMessageCreator, updateNewMessageBodyCreator,
} from "../../redux/state";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    
    return  <div className={s.dialog + ' ' + s.active}>
    <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
</div>
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name = {d.name} id={d.id} /> );

    let messagesElements = state.messages.map( m => <Message message = {m.message} /> );

    let newMessageBody = state.newMessagesBody;

    let addMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.addMessage}>
               {messagesElements}
               <div> <textarea value={newMessageBody}
                               onChange={onMessageChange}
                               placeholder="Enter your message"></textarea></div>
               <div><button onClick={addMessage}>send</button></div>

            </div>
        </div>
    )
}

export default Dialogs