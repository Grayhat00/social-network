import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import UsersAPI from "../api/api"


let Users = (props) => {
    debugger;
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i<= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        {pages.map(p => {
            return <span className={props.currentPage === p && s.selected} onClick={(e) => {
                props.onPageChange(p);
            }}>{p}</span>
        })}

        {
            props.users.map(u => <div key={u.id}>
                
               <span>
                   <div>
                       <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                       </NavLink>
                   </div>
                   <div>
                       {u.followed
                           ? <button disabled = {props.toggleFollowingProgress} onClick={() => {
                            props.toggleFollowingProgress(true);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                   headers: {
                                       "API-KEY": "a200e873-4bda-44d6-96f3-bbbac16f1a1a"
                                   }
                                })
                                .then(response => {
                                 if (response.data.resultCode == 0) {
                                    props.unfollow(u.id)
                                 }
                                 props.toggleFollowingProgress(false);   
                                });

                           }}>Unfollow</button>
                           : <button disabled = {props.toggleFollowingProgress} onClick={() => {
                            props.toggleFollowingProgress(true);
                               axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                   withCredentials: true,
                                   headers: {
                                       "API-KEY": "a200e873-4bda-44d6-96f3-bbbac16f1a1a"
                                   }
                               })
                                   .then(response => {
                                       if (response.data.resultCode == 0) {
                                        props.follow(u.id)
                                       }
                                       props.toggleFollowingProgress(false);
                                       
                                   });

                               

                           }}>Follow</button>}
                   </div>
               </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        {/*<div>{u.location.country}</div>*/}
                        {/*<div>{u.location.city}</div>*/}
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;