import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

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

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name = {d.name} id={d.id} /> );   

    let messagesElements = props.state.messages.map( m => <Message message = {m.message} /> );

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let message = newMessageElement.current.value;
        alert(message);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
               {messagesElements}
                <textarea name="" ref= {newMessageElement} cols="15" rows="5"></textarea>
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    )
}

export default Dialogs