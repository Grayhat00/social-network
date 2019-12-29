import React from 'react';
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reduser";

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
            (store) =>
            {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return  <MyPosts updateNewPostText={onPostChange}
                                 addPost={addPost}
                                 profilePage={state.profilePage}
                                 newPostText={state.profilePage.newPostText}/>

            }
        }
        </StoreContext.Consumer>
        )


}

export default MyPostsContainer;