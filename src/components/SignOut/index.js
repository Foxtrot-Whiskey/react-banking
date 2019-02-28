import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


import { withFirebase } from '../Firebase';
import * as ROUTES from "../../constants/routes";


const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
}

class SignOutButton extends Component {
    constructor(props) {
        super(props);
    }

    onClick = event => {
        this.props.firebase.doSignOut().then(() => {
            this.setState({ ...INITIAL_STATE});
            this.props.history.push(ROUTES.LANDING)
        });

        event.preventDefault();

    };

    render() {

        return (
        <button type="button" onClick={this.onClick}>
            Sign Out
        </button>
        );
    }
}

export default withRouter(withFirebase(SignOutButton));