import { connect } from 'react-redux'
import { register } from '../../actions';

const Register = ({register}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const accountName = document.getElementById("accountName");
        const displayName = document.getElementById("displayName");
        const password = document.getElementById("password");
        const password_confirmation = document.getElementById("password confirmation");
        const birthday = document.getElementById("DOB");
        const phone = document.getElementById("phone");
        const email = document.getElementById("email");
        const zipcode = document.getElementById("zipcode");
    
        if (password.value !== password_confirmation.value) {
            alert("Passwords do not match");
        } else if (!isAdult(birthday.value)) {
            alert("You have to be at least 18 years old to submit this form");
        } else {
            register(accountName.value, displayName.value, phone.value, email.value, zipcode.value);
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
        <div class='border p-3 shadow-lg bg-light'>
            <div class='text-center'>
                <h2>Register</h2>
            </div>
            <form id="registrationForm" onSubmit = {handleSubmit}>
                <div class="form-row">
                    <div class="col">
                        <label>Account Name</label><br/>
                        <input type="text" class="form-control" id="accountName" name="accountName" required pattern="[a-zA-Z]+[a-zA-Z0-9]*"/>
                    </div>
                    <div class="col">
                        <label>Display Name(optional)</label><br/>
                        <input type="text" class="form-control" id="displayName" name="displayName"/>
                    </div>
                </div>
                <br/>
                <div class="form-row">
                    <div class="col">
                        <label>Email</label><br/>
                        <input type="email" class="form-control" id="email" name="email" required placeholder="abc@123.com"/>
                    </div>
                    <div class="col">
                        <label>Phone Number</label><br/>
                        <input type="tel" class="form-control" id="phone" name="phone" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-123-1234"/>
                    </div>
                </div>
                <br/>
                <div class="form-row">
                    <div class="col">
                        <label>Date of Birth</label><br/>
                        <input type="date" class="form-control" id="DOB" name="DOB" required/>
                    </div>
                    <div class="col">
                        <label>Zipcode</label><br/>
                        <input type="text" class="form-control" id="zipcode" name="zipcode" required pattern="[0-9]{5}" placeholder="#####"/>
                    </div>
                </div>
                <br/>
                <div class="form-row">
                    <div class="col">
                        <label>Password</label><br/>
                        <input type="password" class="form-control"  id="password" name="password" required/>
                    </div>
                    <div class="col">
                        <label>Password Confirmation</label><br/>
                        <input type="password" class="form-control"  id="password confirmation" name="password confirmation" required/>
                    </div>
                </div> 
                <br/>
                <div class="form-row text-center">
                    <div class="col">
                        <button type="submit" class="btn btn-primary" id="register">Register</button>
                    </div>
                    <div class="col">
                        <button type="reset" class="btn btn-primary" id="submit">Clear</button>
                    </div>
                </div>     
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
        register: (accountName, displayName, phone, email, zipcode) => dispatch(register(accountName, displayName, phone, email, zipcode))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);