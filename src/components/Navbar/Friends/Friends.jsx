import React from 'react';
import s from './Friends.module.css';
import { NavLink } from 'react-router-dom';
import Post from "../../Profile/MyPosts/Post/Post";



const Friends = (props) => {
    // let fiendsElements = props.posts.map (p => <Post message= {p.message} likeCount = {p.likeCount} />);
  return (
      <div className={s.friends}>        
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMh31MEEE6-fXn7eAlWOfWtDroycWWXpCYo0_5ud9ql7ZSXxkxwQ&s" alt=""/>
          <div>
            <h5>{props.name}</h5>
          </div>     
      </div>
    
  )

}

export default Friends;