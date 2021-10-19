import {ADD_FOLLOWER, LOGIN, LOGOUT, POST_ARTICLE, REGISTER, REMOVE_FOLLOWER, REQUEST_ARTICLES, REQUEST_USERS, SEARCH, UPDATE_HEADLINE, UPDATE_USERNAME
, UPDATE_PASSWORD, UPDATE_PHONE, UPDATE_ZIPCODE, UPDATE_EMAIL} from './actions'

const initialState = {
    userInfo: [],
    loggedIn: false,
    currUser: {},
    followers: [],
    nextUserId: 11,
    nextArticleId: 101,
    articles: [],
    articles_shown: []
};

const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  


export function Reducer(state = initialState, action) {
    switch (action.type) {  
        case REGISTER:
            return {...state, 
                currUser: {
                id: state.nextUserId,
                headline: "I'm learning javascript",
                username: action.accountName,
                phone: action.phone,
                email: action.email,
                zipcode: action.zipcode,
                avatar: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61437608f558da79b1b2efce%2FStephen-Curry%2F1960x0.jpg%3Ffit%3Dscale"
            }, 
            articles_shown: Array(10).fill(state.nextArticleId).map((x, y) => {
              return {
                    userId: state.nextUserId,
                    id: x + y, 
                    title: "Dummy title",
                    body: "This is a dummy post", 
                    comments:[],
                    timestamp: randomDate(new Date(2012, 0, 1), new Date()),
                    img: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    author: action.accountName
                }
            }), 
            followers: [state.userInfo[0], state.userInfo[1], state.userInfo[2]],
            loggedIn: true,
            nextUserId: state.nextUserId + 1, 
            nextArticleId: state.nextUserId + 10
        };
        case LOGIN:
            let success = false;
            let currUser = {};
            let followers = [];
            let articles_shown = [];
            const filterCb = (article) => {
                return article.userId === currUser.id
            }

            for (let i = 0; i < state.userInfo.length; i++) {
                let user = state.userInfo[i];
                if (user.accountName === action.accountName && user.password === action.password) {
                    success = true;
                    currUser = {...user};
                    followers = [state.userInfo[(i+1) % 10], state.userInfo[(i+2) % 10], state.userInfo[(i+3) % 10]];
                    articles_shown = state.articles.filter(filterCb);
                    break;
                }
            }
            if (!success) {
                alert('Invalid account name and password');
                return state
            } else {
                return {...state, loggedIn: true, currUser: currUser, followers: followers, articles_shown: articles_shown};
            }
        case LOGOUT:
            return {...state, loggedIn: false, currUser: {}, followers: [], articles_shown: []};
        // update state with requested users from the dummy server
        case REQUEST_USERS:
            let userInfo = action.users.map((user) => {
                return {
                    id: user.id,
                    accountName: user.username,
                    password: user.address.street,
                    headline: user.company.catchPhrase,
                    username: user.username,
                    phone: user.phone,
                    email: user.email,
                    zipcode: user.address.zipcode,
                    avatar: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61437608f558da79b1b2efce%2FStephen-Curry%2F1960x0.jpg%3Ffit%3Dscale"
                }
            });
            return {...state, userInfo: userInfo};
        case REQUEST_ARTICLES:
            let articles = action.articles.map((article) => {
                return {
                    userId: article.userId,
                    id: article.id, 
                    title: article.title,
                    body: article.body, 
                    comments:[],
                    timestamp: randomDate(new Date(2012, 0, 1), new Date()),
                    img: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    author: state.userInfo.filter(user => user.id === article.userId)[0].username
                }
            })
            return {...state, articles: articles};
        case UPDATE_HEADLINE:
            return {...state, currUser: {...state.currUser, headline: action.headline}};
        case ADD_FOLLOWER:
            return {
                ...state,
                followers: [
                    ...state.followers,
                    {
                        id: state.nextUserId,
                        headline: 'I am a new follower',
                        username: action.username,
                        avatar: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61437608f558da79b1b2efce%2FStephen-Curry%2F1960x0.jpg%3Ffit%3Dscale"
                    }
                ],
                nextUserId: state.nextUserId + 1
            }
        case REMOVE_FOLLOWER:
            return {
                ...state,
                followers: state.followers.filter(follower => {
                        return follower.id !== action.id
                    }
                )
            }
        case SEARCH:
            return {
                ...state,
                articles_shown: state.articles_shown.filter(
                    article => {
                        return article.body.includes(action.keyword) || article.author.includes(action.keyword)
                    }
                )
            }
        case POST_ARTICLE:
            return {
                ...state,
                articles_shown: [...state.articles_shown, {
                    userId: state.currUser.userId,
                    id: state.nextArticleId, 
                    title: "This is a dummy title",
                    body: action.newArticleBody, 
                    comments:[],
                    timestamp: new Date(),
                    img: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    author: state.currUser.username       
                }],
                nextArticleId: state.nextArticleId + 1
            }
        case UPDATE_USERNAME:
            return {...state, currUser: {...state.currUser, username: action.username}};
        case UPDATE_PASSWORD:
            return {...state, currUser: {...state.currUser, password: action.password}};
        case UPDATE_PHONE:
            return {...state, currUser: {...state.currUser, phone: action.phone}};
        case UPDATE_EMAIL:
            return {...state, currUser: {...state.currUser, email: action.email}};
        case UPDATE_ZIPCODE:
            return {...state, currUser: {...state.currUser, zipcode: action.zipcode}};
        default:
            return state;
    }
}