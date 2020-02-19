import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus} from "../../redux/profile-reduser";
import {withRouter} from "react-router-dom";
import { Redirect } from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile}   status={this.props.status} updateStatus = {this.props.updateStatus}/>

        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus})(WithUrlDataContainerComponent);