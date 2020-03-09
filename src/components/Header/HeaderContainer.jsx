import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {Logout, setAuth} from "../../redux/auth-reduser";


class HeaderContainer extends React.Component{

    render() {
        return   <Header {...this.props} auth = {this.props.auth} logout={this.props.Logout}/>
    }
}

    let mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth,
            login: state.auth.login,
        }
    }

export default connect(mapStateToProps, {Logout} ) (HeaderContainer);