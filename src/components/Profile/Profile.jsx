import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import DialogsContainer from "../Dialogs/DialogsContainer";



const Profile = (props) => {
 
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer  render={ () => <DialogsContainer /> }
          // store={props.store}
      />
    </div>
  )
}

export default Profile;