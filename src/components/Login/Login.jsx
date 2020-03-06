import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {toLogin} from "../../redux/auth-reduser";
import {Input} from "../Common/FormsControls/formsControl";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={"Login"} placeholder="username" component={Input} validate={[required]}/></div>
            <div><Field name={"password"} placeholder="password" component={Input} validate={[required]}/></div>
            <div><Field name={"rememberMe"} type="checkbox" component={Input}/>remember me</div>
            <div>
                <button type="text">Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.toLogin(formData);
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default connect(null, {toLogin})(Login);