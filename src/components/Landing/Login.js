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
        <div class='border p-3 shadow-lg bg-light'>
            <div class='text-center'>
                <h2>Login</h2>
            </div>
            <form id="loginForm" onSubmit = {handleSubmit}>
                <label>Account Name</label><br/>
                <input type="text" id="login_accountName" class="form-control" name="login_accountName" required /><br/>
                <label>Password</label><br/>
                <input type="password" id="login_password" class="form-control" name="login_password" required/><br/>
                <div class="text-center">
                    <input type="submit" class="btn btn-primary" value="Log In" id="login_submit" />
                </div>
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