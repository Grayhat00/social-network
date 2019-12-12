import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {
  return (  <div>
    My Post
    <div>
      <textarea name="" id="" cols="15" rows="5"></textarea>
      <button>Add post</button>
    </div>
    <div className={s.posts}>
     <Post message='Hi, how are you?'/>
     <Post message='You can do IT'/>
     <Post />
     <Post />
    </div>
  </div>
  
  )

}

export default MyPosts;