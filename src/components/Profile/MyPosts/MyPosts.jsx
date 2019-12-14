import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {
  let postsData = [
    {id: '1', message: 'Hi, how are you?', likeCount: 0},
    {id: '2', message: 'You can do', likeCount: 23},
    {id: '3', message: 'Sveta'}, 
    {id: '4', message: 'Sasha'},
    {id: '4', message: 'Viktor'},
    {id: '6', message: 'Valera'}
];

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
     <Post message= {postsData[0].message} likeCount = {postsData[0].likeCount} />
     <Post message= {postsData[1].message} likeCount = {postsData[1].likeCount} />
     <Post />
     <Post />
    </div>
  </div>
  
  )

}

export default MyPosts;