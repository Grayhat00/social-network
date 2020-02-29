import React from 'react';
import MyPosts from "./MyPosts";
import {
    addPost,
    addPostActionCreator,
    updateNewPostText,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reduser";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPost());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostText(text));
            // dispatch(action);
        }
    }
}
const MyPostContainer = connect(mapStateToProps, {addPost, updateNewPostText}) (MyPosts);

export default MyPostContainer;