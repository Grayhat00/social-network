const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi, how are you?', likeCount: 0},
                {id: '2', message: 'You can do', likeCount: 23},
                {id: '3', message: 'Sveta', likeCount: 12},
                {id: '4', message: 'Sasha', likeCount: 44},
                {id: '4', message: 'Viktor', likeCount: 7},
                {id: '6', message: 'Valera', likeCount: 88}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: '1', name: 'Andres'},
                {id: '2', name: 'Sasha'},
                {id: '3', name: 'Sveta'},
            ],
            digit: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'How are you'},
            ]
        },

    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    setState(value) {
        this._state = value;
    },

    dispatch(action) {
        if (action.type === ADD_POST ) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText ='';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body =  this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = ' ';
            this._state.dialogsPage.messages.push({id: 7, message: body});
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () =>  ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () =>  ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ( {   type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;
window.store = store;

