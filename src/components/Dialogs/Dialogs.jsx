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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name = "Dimych" id="1"/>
                <DialogItem name = "Andrey" id="2"/>
                <DialogItem name = "Sveta" id="3"/>
                <DialogItem name = "Sasha" id="4"/>
                <DialogItem name = "Viktor" id="5"/>
                <DialogItem name = "Valera" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message = "Hii" />
                <Message message = "Hey" />
                <Message message = "How r u" />
                <Message message = "Yo Fine" />
                <Message message = "Thank you" />
                <Message message = "Nice to meet you" />
            </div>
        </div>
    )
}

export default Dialogs