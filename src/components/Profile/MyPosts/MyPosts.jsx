import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
 
  let postElements = props.posts.map (p => <Post message= {p.message} likeCount = {p.likeCount} />);
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

  return (  
  <div className={s.postsBlock}>
    <h3>My Post</h3>
    <div >   
      <div>
        <textarea name="" ref= {newPostElement} cols="15" rows="5"></textarea>
      </div>
        <button onClick={ addPost } className={s.btn}>Add post</button>
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