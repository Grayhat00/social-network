import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {toLogin} from "../../redux/auth-reduser";
import {Input} from "../Common/FormsControls/formsControl";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import s from "../Common/FormsControls/formsControl.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={"email"} placeholder="Email" component={Input} validate={[required]}/></div>
            <div><Field type={"password"} name={"password"} placeholder="password" component={Input} validate={[required]}/></div>
            <div><Field name={"rememberMe"} type="checkbox" component={Input}/>remember me</div>
           { props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button type="text">Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.toLogin(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {toLogin})(Login);