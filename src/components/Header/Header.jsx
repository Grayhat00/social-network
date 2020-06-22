import React from 'react';
import s from './Header.module.css';
import {Link, NavLink} from "react-router-dom";
import avatar from "../../assets/images/photo.png";
import {connect} from "react-redux";
import users from '../../assets/images/users.svg';
import message from '../../assets/images/message.svg'
import bell from '../../assets/images/bell.svg'
import info from '../../assets/images/info-circle.svg'

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.loginBlock}>
            { props.isAuth
                ? <nav className={s.navbar}>
                    <div className={s.user_info}>

                    </div>
                    <ul className={s.nav_list}>
                        <li className={s.nav_link}>
                            <img src={avatar} className={s.secondaryPhoto} alt=""/>
                            <span className={s.username}>{props.login}</span>
                        </li>
                        <li className={s.nav_link}>
                            <Link>Home</Link>
                        </li>
                        <li className={s.nav_link}>
                            <Link>Create</Link>
                        </li>
                        <li className={s.nav_link}>
                            <img src={users} className={s.notice} alt=""/>
                            <img src={message} className={s.notice} alt=""/>
                            <img src={bell} className={s.notice} alt=""/>
                        </li>
                        <li className={s.nav_link}>
                            <img src={info} className={s.notice} alt=""/>
                        </li>
                    </ul>
                     {/*<div className={s.notice}>*/}

                     {/*</div>*/}


                    {/*<button onClick={props.logout}>Log out</button>*/}
            </nav>

                : <NavLink to={'/login'}>Login</NavLink>
            }
    </div>
</header>
}

let mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    })
}

export default connect(mapStateToProps)(Header);

