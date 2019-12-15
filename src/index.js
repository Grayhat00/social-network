import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: '1', message: 'Hi, how are you?', likeCount: 0},
    {id: '2', message: 'You can do', likeCount: 23},
    {id: '3', message: 'Sveta', likeCount: 12}, 
    {id: '4', message: 'Sasha', likeCount: 44},
    {id: '4', message: 'Viktor', likeCount: 7},
    {id: '6', message: 'Valera', likeCount: 88}
]

let dialogs = [
    {id: '1', name: 'Dimych'},
    {id: '2', name: 'Andrey'},
    {id: '3', name: 'Sveta'}, 
    {id: '4', name: 'Sasha'},
    {id: '4', name: 'Viktor'},
    {id: '6', name: 'Valera'}
]

let messages = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'How are you'},
    {id: '3', message: 'Fine'}, 
    {id: '4', message: 'Yo Yo'},
    {id: '4', message: 'Say Hi'},
    {id: '6', message: 'just do it'}
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

