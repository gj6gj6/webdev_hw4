/*
 * action types
 */
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const REQUEST_USERS = "REQUEST_USERS";
export const REQUEST_ARTICLES = "REQUEST_ARTICLES ";
export const UPDATE_HEADLINE = "UPDATE_HEADLINE";
export const ADD_FOLLOWER = "ADD_FOLLOWER";
export const REMOVE_FOLLOWER = "REMOVE_FOLLOWER";
export const SEARCH = "SEARCH";


export function login(accountName, password){
    return {type: LOGIN, accountName, password};
}

export function logout(){
    return {type: LOGOUT};
}

export function register(accountName, password, displayName){
    return {type: REGISTER, accountName, password, displayName};
}

export function requestUsers(users) {
    return {type: REQUEST_USERS, users}
}

export function requestArticles(articles) {
    return {type: REQUEST_ARTICLES, articles}
}

export function updateHeadline(headline) {
    return {type: UPDATE_HEADLINE, headline}
}

export function addFollower(username) {
    return {type: ADD_FOLLOWER, username}
}

export function removeFollower(id) {
    return {type: REMOVE_FOLLOWER, id}
}

export function search(keyword) {
    return {type: SEARCH, keyword}
}