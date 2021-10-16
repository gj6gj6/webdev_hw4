import React from "react";
import { connect } from 'react-redux';
import Login from './Login'
import Register from './Register'
import {requestUsers, requestArticles} from '../../actions'

class Landing extends React.Component {

    componentDidMount() {
        if (this.props.userInfo.length === 0) {
            fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(users => {
                this.props.requestUsers(users);
            });

            fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(articles => {
                this.props.requestArticles(articles);
            });
        }
    }

    render() {
        return (
            <div>
                <Register />
                <Login />
                <Article />
            </div>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestUsers: (users) => dispatch(requestUsers(users)),
        requestArticles: (articles) => dispatch(requestArticles(articles))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);