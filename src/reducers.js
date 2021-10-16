import {ADD_FOLLOWER, LOGIN, LOGOUT, REGISTER, REMOVE_FOLLOWER, REQUEST_ARTICLES, REQUEST_USERS, SEARCH, UPDATE_HEADLINE} from './actions'

const initialState = {
    userInfo: [],
    loggedIn: false,
    currUser: {},
    followers: [],
    uextUserId: 11,
    uextArticleId: 101,
    articles: [],
    articles_shown: []
};


export function Reducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER:
            let user = {
                id: state.uextUserId,
                accountName: action.accountName,
                password: action.password,
                headline: "I'm learning javascript",
                username: action.displayName ? action.displayName : action.accountName,
                avatar: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61437608f558da79b1b2efce%2FStephen-Curry%2F1960x0.jpg%3Ffit%3Dscale"
            }
            return {...state, userInfo: [...state.userInfo, user], uextUserId: state.uextUserId + 1};
        case LOGIN:
            let success = false;
            let currUser = {};
            let followers = []
            for (let i = 0; i < state.userInfo.length; i++) {
                let user = state.userInfo[i];
                if (user.accountName === action.accountName && user.password === action.password) {
                    success = true;
                    currUser = {...user};
                    // dummy users: next 3, registered users: first 3(hardcoded)
                    if (i <= 9) {
                        followers = [state.userInfo[(i+1) % 10], state.userInfo[(i+2) % 10], state.userInfo[(i+3) % 10]]
                    } else {
                        followers = [state.userInfo[0], state.userInfo[1], state.userInfo[2]]
                    }
                    break;
                }
            }
            if (!success) alert('Invalid account name and password');
            return {...state, loggedIn: success, currUser: currUser, followers: followers};
        case LOGOUT:
            return {...state, loggedIn: false, currUser: {}, followers: []};
        // update state with requested users from the dummy server
        case REQUEST_USERS:
            let userInfo = action.users.map((user, idx) => {
                return {
                    id: idx + 1,
                    accountName: user.username,
                    password: user.address.street,
                    headline: user.company.catchPhrase,
                    username: user.username,
                    avatar: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61437608f558da79b1b2efce%2FStephen-Curry%2F1960x0.jpg%3Ffit%3Dscale"
                }
            });
            return {...state, userInfo: userInfo};
        case REQUEST_ARTICLES:
            
            let articles = action.articles.map((article) => {
                return {
                    user_id: article.user_id,
                    id: article.id, 
                    title: article.title,
                    body: article.body, 
                    comments:[],
                    date: Date.now(),
                    img: null      
                }
            })

            let articles_shown = action.articles.map((article) => {
                return {
                    user_id: article.user_id,
                    id: article.id, 
                    title: article.title,
                    body: article.body, 
                    comments:[],
                    date: Date.now(),
                    img: null         
                }
            })
            return {...state, articles: articles, articles_shown: articles_shown};
        case UPDATE_HEADLINE:
            return {...state, currUser: {...state.currUser, headline: action.headline}};
        case ADD_FOLLOWER:
            return {
                ...state,
                followers: [
                    ...state.followers,
                    {
                        id: state.uextUserId,
                        headline: 'I am a new follower',
                        username: action.username,
                        avatar: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61437608f558da79b1b2efce%2FStephen-Curry%2F1960x0.jpg%3Ffit%3Dscale"
                    }
                ],
                uextUserId: state.uextUserId + 1
            }
        case REMOVE_FOLLOWER:
            return {
                ...state,
                followers: state.followers.filter(
                    follower => {
                        return follower.id !== action.id
                    }
                )
            }
        case SEARCH:
            return {
                ...state,
                articles_shown: state.articles.filter(
                    article => {
                        return article.text.includes(action.keyword)
                    }
                )
            }
        default:
            return state;
    }
}