import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={"Login"} placeholder="username" component={"input"}/></div>
            <div><Field name={"password"} placeholder="password" component={"input"}/></div>
            <div><Field name={"rememberMe"} type="checkbox" component={"input"}/>remember me</div>
            <div>
                <button type="text">Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (fromData) => {
        console.log(fromData);
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;