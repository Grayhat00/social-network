import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reduser";
import {connect} from "react-redux";

// const MyPostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) =>
//             {
//                 let state = store.getState();
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }
//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextActionCreator(text);
//                     store.dispatch(action);
//                 }
//                 return  <MyPosts updateNewPostText={onPostChange}
//                                  addPost={addPost}
//                                  profilePage={state.profilePage}
//                                  newPostText={state.profilePage.newPostText}/>
//
//             }
//         }
//         </StoreContext.Consumer>
//         )
//
//
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            updateNewPostTextActionCreator(text);
            // dispatch(action);
        }
    }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostContainer;