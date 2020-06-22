import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import DialogsContainer from "../Dialogs/DialogsContainer";
import ProfileStatus from "./ProfileInfo/ProfileStatus";



const Profile = (props) => {
    return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} isOwner={props.isOwner}/>
      <MyPostsContainer  render={ () => <DialogsContainer /> }/>
    </div>
  )
}

export default Profile;