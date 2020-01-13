const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


// let sum = (a, b = 1) => {
//     return a+b;
// }
// sum(2);
// For state should use parameter by default
let initialState =  {
    posts: [
        {id: '1', message: 'Hi, how are you?', likeCount: 0},
        {id: '2', message: 'You can do', likeCount: 23},
        {id: '3', message: 'Sveta', likeCount: 12},
        {id: '4', message: 'Sasha', likeCount: 44},
        {id: '4', message: 'Viktor', likeCount: 7},
        {id: '6', message: 'Valera', likeCount: 88}
    ],
    newPostText: 'it-kamasutra.com',
    profile: []
};
const profileReduser = (state = initialState, action) => {
    switch (action.type ) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };

        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };

        }
        default:
            return state;
        }

    }

export const addPost = () =>  ({type: ADD_POST})
export const updateNewPostText = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile})
export default profileReduser;
