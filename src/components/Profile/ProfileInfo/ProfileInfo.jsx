import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import userPhoto from "../../../assets/images/user.jpg";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

  return (
    <div>
      {/*<div>*/}
      {/*  <img className={s.profImg} src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />*/}
      {/*</div>*/}
      <div className={s.descriptionBlock}>
              <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} alt=""/>
          {props.isOwner && <input type="file"/>}
              <h5>{props.profile.fullName}</h5>
              <p>{props.profile.aboutMe}</p>
              <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
      </div>
    </div>
  )
}

export default ProfileInfo;