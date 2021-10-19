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
export const POST_ARTICLE = "POST_ARTICLE";
export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const UPDATE_PHONE = "UPDATE_PHONE";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";


export function login(accountName, password){
    return {type: LOGIN, accountName, password};
}

export function logout(){
    return {type: LOGOUT};
}

export function register(accountName, displayName, phone, email, zipcode){
    return {type: REGISTER, accountName, displayName, phone, email, zipcode};
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

export function post_article(newArticleBody) {
    return {type: POST_ARTICLE, newArticleBody}
}

export function update_username(username) {
    return {type: UPDATE_USERNAME, username}
}

export function update_password(password) {
    return {type: UPDATE_PASSWORD, password}
}

export function update_phone(phone) {
    return {type: UPDATE_PHONE, phone}
}

export function update_email(email) {
    return {type: UPDATE_EMAIL, email}
}

export function update_zipcode(zipcode) {
    return {type: UPDATE_ZIPCODE, zipcode}
}