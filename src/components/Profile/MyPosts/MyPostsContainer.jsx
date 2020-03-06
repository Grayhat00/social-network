import React from 'react';
import MyPosts from "./MyPosts";
import {
    addPost,
    addPostActionCreator,
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
        addPost: (newPostText) => {
            dispatch(addPost(newPostText));
        }
    }
}
const MyPostContainer = connect(mapStateToProps, {addPost}) (MyPosts);

export default MyPostContainer;