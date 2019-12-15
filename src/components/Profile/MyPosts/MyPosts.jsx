import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
 
  let postElements = props.posts.map (p => <Post message= {p.message} likeCount = {p.likeCount} />);

  return (  
  <div className={s.postsBlock}>
    <h3>My Post</h3>
    <div >   
      <div>
        <textarea name="" id="" cols="15" rows="5"></textarea>
      </div>
      <div>
        <button className={s.btn}>Add post</button>
      </div>
      
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