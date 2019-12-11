import React from 'react';
import s from './Profile.module.css';


const Profile = () => {
  return <div className={s.profile}>
    <div>
      <img src="https://tripmydream.cc/travelhub/travel/seo/img/306/28/gallery_1445853090_1991075162_fit.jpg" alt="" />
    </div>
    <div>
      My Posts
      <div>
        New post
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          post 1
          </div>
        <div className={s.item}>
          post 2
          </div>
      </div>
    </div>


  </div>
}

export default Profile;