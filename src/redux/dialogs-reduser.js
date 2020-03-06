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
};
const dialogsReduser = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
           return {
                ...state,
                messages: [ ...state.messages, {id: 8, message: body}]
            };
        }
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) =>  ({type: SEND_MESSAGE, newMessageBody} )


export default dialogsReduser;