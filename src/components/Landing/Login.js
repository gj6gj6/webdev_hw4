import { connect } from 'react-redux'
import {login} from '../../actions'

const Login = ({login}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const accountName = document.getElementById("login_accountName");
        const password = document.getElementById("login_password");
        login(accountName.value, password.value);
    }


    return (
        <div>
            <h2>Log in</h2>
            <form id="loginForm" onSubmit = {handleSubmit}>
                <label>Account Name</label><br/>
                <input type="text" id="login_accountName" name="login_accountName" required /><br/><br/>
                <label>Password</label><br/>
                <input type="password" id="login_password" name="login_password" required/><br/><br/>
                <input type="submit" value="Log In" id="login_submit" />
            </form> 
        </div>
    )
}




const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (accountName, password) => dispatch(login(accountName, password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);