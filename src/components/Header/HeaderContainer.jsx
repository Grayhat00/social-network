import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuth} from "../../redux/auth-reduser";


class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.setAuth()
    }
    render() {
        return   <Header {...this.props} auth = {this.props.auth}/>
    }
}

    let mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth,
            login: state.auth.login,
        }
    }

export default connect(mapStateToProps, {setAuth} ) (HeaderContainer);