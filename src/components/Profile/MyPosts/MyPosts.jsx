import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {
 
  let postElements = props.posts.map (p => <Post message= {p.message} likeCount = {p.likeCount} />);

  let newPostText = props.newPostText;

  let newPostElement = React.createRef();

  let addNewPost = (values) => {
    props.addPost(values.newPostText);
  }


  return (  
  <div className={s.postsBlock}>
    <h3>My Post</h3>
     <NewPostReduxForm onSubmit={addNewPost}/>
    <div className={s.posts}>
      {postElements}
     <Post />
    </div>
  </div>
  
  )

}

const AddNewPost = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field name={"newPostText"} component={"textarea"} placeholder="Enter your post"/>
        </div>
        <button  className={s.btn}>Add post</button>
      </form>
  )
}

const NewPostReduxForm = reduxForm({form: 'ProfileAddNewPost'})(AddNewPost);


// const AddMsgReduxForm = reduxForm({form: 'dialogAddMsgForm'})(AddMsgForm);
export default MyPosts;