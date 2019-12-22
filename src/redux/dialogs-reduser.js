const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: '1', name: 'Dimych'},
        {id: '2', name: 'Andrey'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Sasha'},
        {id: '4', name: 'Viktor'},
        {id: '6', name: 'Valera'}
    ],
    messages: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you'},
        {id: '3', message: 'Fine'},
        {id: '4', message: 'Yo Yo'},
        {id: '4', message: 'Say Hi'},
        {id: '6', message: 'just do it'}
    ],
    newMessageBody: ""
};
const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 8, message: body});
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = () =>  ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ( {   type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReduser;