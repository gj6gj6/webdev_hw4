import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Landing from './components/Landing/Landing';
import Main from './components/Main/Main';
import Profile from './components/Profile/Profile';

const App = ({loggedIn}) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {loggedIn ? <Redirect to="/main" /> : <Landing />}
                </Route>
                <Route exact path={"/main"} component={Main}/>
                <Route exact path={"/profile"} component={Profile}/>
            </Switch>
        </Router>
    )
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);