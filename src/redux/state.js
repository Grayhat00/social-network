import {rerenderEntireThree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: '1', message: 'Hi, how are you?', likeCount: 0},
            {id: '2', message: 'You can do', likeCount: 23},
            {id: '3', message: 'Sveta', likeCount: 12}, 
            {id: '4', message: 'Sasha', likeCount: 44},
            {id: '4', message: 'Viktor', likeCount: 7},
            {id: '6', message: 'Valera', likeCount: 88}
        ],
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
        ]
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
    }

}

export let addPost = (postMessage) => {

    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireThree(state);
}

export default state;