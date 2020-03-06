import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {
    sendMessageCreator,
} from "../../redux/dialogs-reduser";
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
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
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    if (!props.isAuth) return <Redirect to={"/login"}/>;
    let onNewMessageChange = (e) => {

    }
    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.addMessage}>
                {messagesElements}
                <AddMsgReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}


const AddMsgForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"} placeholder="Enter your message"/>
            </div>
            <button>Send</button>
        </form>)

}

const AddMsgReduxForm = reduxForm({form: 'dialogAddMsgForm'})(AddMsgForm);

export default Dialogs;