import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import {
   sendMessageCreator, updateNewMessageBodyCreator,
} from "../../redux/dialogs-reduser";

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
    let dialogsElements = props.dialogs.map( d => <DialogItem name = {d.name} id={d.id} /> );

    let messagesElements = props.messages.map( m => <Message message = {m.message} /> );


    let onAddMessage = () => {
        props.addMessage();
    }
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBodyCreator(body)
    }
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.addMessage}>
               {messagesElements}
               <div> <textarea onChange={onMessageChange}
                               value={props.newMessagesBody}
                               placeholder="Enter your message"></textarea></div>
               <div><button onClick={onAddMessage}>send</button></div>

            </div>
        </div>
    )
}

export default Dialogs