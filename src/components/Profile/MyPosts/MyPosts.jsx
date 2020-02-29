import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
 
  let postElements = props.posts.map (p => <Post message= {p.message} likeCount = {p.likeCount} />);

  let newPostText = props.newPostText;

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (  
  <div className={s.postsBlock}>
    <h3>My Post</h3>
    <div>
      <div>
        <textarea name="" onChange={onPostChange} ref= {newPostElement} value={newPostText} cols="15" rows="5" ></textarea>
      </div>
        <button onClick={ onAddPost } className={s.btn}>Add post</button>
    </div>
    <div className={s.posts}>
      {postElements}
     <Post />
     <Post />
    </div>
  </div>
  
  )

}

export default MyPosts;