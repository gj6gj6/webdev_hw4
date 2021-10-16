import { connect } from 'react-redux'
import { register, login } from '../../actions';

const Register = ({register, login}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const accountName = document.getElementById("accountName");
        const displayName = document.getElementById("displayName");
        const password = document.getElementById("password");
        const password_confirmation = document.getElementById("password confirmation");
        const birthday = document.getElementById("DOB");
    
        if (password.value !== password_confirmation.value) {
            alert("Passwords do not match");
        } else if (!isAdult(birthday.value)) {
            alert("You have to be at least 18 years old to submit this form");
        } else {
            register(accountName.value, password.value, displayName.value);
            login(accountName.value, password.value);
        }
    }
    
    const isAdult = (birthday) => {
        let [birYear, birMonth, birDate] = birthday.split("-");
        let today = new Date();
        let [Y,M,D] = [today.getFullYear(), today.getMonth() + 1, today.getDate()];
        if (Y - birYear < 18) {
            return false;
        } else if (Y - birYear === 18){
            if (M - birMonth < 0) {
                return false;
            } else if (M - birMonth === 0) {
                if (D - birDate < 0) {
                    return false;
                }
            }
        }
        return true;
    }


    return (
        <div>
            <h2>Register</h2>
            <form id="registrationForm" onSubmit = {handleSubmit}>
                <label>Account Name</label><br/>
                <input type="text" id="accountName" name="accountName" required pattern="[a-zA-Z]+[a-zA-Z0-9]*"/><br/><br/>
                <label>Display Name(optional)</label><br/>
                <input type="text" id="displayName" name="displayName"/><br/><br/>
                <label>Email</label><br/>
                <input type="email" id="email" name="email" required placeholder="abc@123.com"/><br/><br/>
                <label>Phone Number</label><br/>
                <input type="tel" id="phone" name="phone" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-123-1234"/><br/><br/>
                <label>Date of Birth</label><br/>
                <input type="date" id="DOB" name="DOB" required/><br/><br/>
                <label>Zipcode</label><br/>
                <input type="text" id="zipcode" name="zipcode" required pattern="[0-9]{5}" placeholder="#####"/><br/><br/>
                <label>Password</label><br/>
                <input type="password" id="password" name="password" required/><br/><br/>
                <label>Password Confirmation</label><br/>
                <input type="password" id="password confirmation" name="password confirmation" required/><br/><br/>

                <br/><br/>
                
                <input type="submit" value="Register" id="submit" />
                <input type="reset" value="Clear"/>
            </form> 
        </div>
    )
}





const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: (accountName, password, displayName) => dispatch(register(accountName, password, displayName)),
        login: (accountName, password) => dispatch(login(accountName, password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);