import React from "react";
import { connect } from 'react-redux';
import Login from './Login'
import Register from './Register'
import {requestUsers, requestArticles} from '../../actions'

class Landing extends React.Component {

    fetchInfo = async (users_url, articles_url) => {
        const users_response = await fetch(users_url);
        const users = await users_response.json();
        this.props.requestUsers(users);

        const articles_response = await fetch(articles_url);
        const articles = await articles_response.json();
        this.props.requestArticles(articles);
    }


    componentDidMount() {
        if (this.props.userInfo.length === 0 && this.props.articles.length === 0) {
            this.fetchInfo("https://jsonplaceholder.typicode.com/users", "https://jsonplaceholder.typicode.com/posts");
        }
    }

    render() {
        return (
            <div className='container'>
                <div class='row'>
                    <div class='col-6'>
                        <Register />
                    </div>
                    <div class='col-6'>
                        <Login />
                    </div>
                </div>
            </div>
            
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        articles: state.articles
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestUsers: (users) => dispatch(requestUsers(users)),
        requestArticles: (articles) => dispatch(requestArticles(articles))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);