import React from "react";
import { connect } from "react-redux";
import { LoginActions } from "../store/actions";

const withUser = (WrappedComponent) => {
    const HOC = (props) => {
        return <WrappedComponent {...props} />;
    };
    const mapStateToProps = (state) => ({
        user: state,
    });
    const mapStateToDispatch = (dispatch) => ({
        setUser: (user) => dispatch(LoginActions.loggedIn(user))
    })
    return connect(mapStateToProps, mapStateToDispatch)(HOC);
};

export default withUser;