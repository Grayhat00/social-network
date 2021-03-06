import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import {
   sendMessageCreator, updateNewMessageBodyCreator,
} from "../../redux/dialogs-reduser";
import { Redirect } from 'react-router-dom';


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

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( d => <DialogItem name = {d.name} key={d.id} id={d.id} /> );
    let messagesElements = state.messages.map( m => <Message message = {m.message} key={m.id}/> );
    let newMessageBody = state.newMessageBody;


    let onAddMessage = () => {
        props.addMessage();
    }
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    if (!props.isAuth) return <Redirect to = {"/login"} />;

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.addMessage}>
               {messagesElements}
               <div> <textarea onChange={onMessageChange}
                               value={newMessageBody}
                               placeholder="Enter your message"></textarea></div>
               <div><button onClick={onAddMessage}>send</button></div>

            </div>
        </div>
    )
}

export default Dialogs