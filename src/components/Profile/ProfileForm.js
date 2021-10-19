import React from "react";
import { connect } from 'react-redux';
import { update_username, update_password, update_phone, update_email, update_zipcode } from '../../actions'

const ProfileForm = ({update_username, update_password, update_phone, update_email, update_zipcode}) =>  {
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const phone = document.getElementById("phone");
        const email = document.getElementById("email");
        const zipcode = document.getElementById("zipcode");
        if (username.value.length > 0) {
            update_username(username.value);
            username.value = '';
        } 
        if (password.value.length > 0) {
            update_password(password.value);
            password.value = '';
        }
        if (phone.value.length > 0) {
            update_phone(phone.value);
            phone.value = '';
        } 
        if (email.value.length > 0) {
            update_email(email.value);
            email.value = '';
        } 
        if (zipcode.value.length > 0) {
            update_zipcode(zipcode.value);
            zipcode.value = '';
        } 
    }

    return (
            <div class='border p-3 shadow-lg bg-light'>
                <form id="registrationForm" onSubmit = {handleSubmit}>
                    <label>Name</label><br/>
                    <input type="text" id="username" class="form-control" name="username" pattern="[a-zA-Z]+[a-zA-Z0-9]*"/><br/>
                    <label>Email</label><br/>
                    <input type="email" id="email" class="form-control" name="email" placeholder="abc@123.com"/><br/>
                    <label>Phone Number</label><br/>
                    <input type="tel" id="phone" class="form-control" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-123-1234"/><br/>
                    <label>Zipcode</label><br/>
                    <input type="text" id="zipcode" class="form-control" name="zipcode" pattern="[0-9]{5}" placeholder="#####"/><br/>
                    <label>Password</label><br/>
                    <input type="password" id="password" class="form-control" name="password" /><br/>

                    <div class="text-center">
                        <input type="submit" class='btn btn-primary' value="Update Info" id="submit" />
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
        update_username: (username) => dispatch(update_username(username)),
        update_password: (password) => dispatch(update_password(password)),
        update_phone: (phone) => dispatch(update_phone(phone)),
        update_email: (email) => dispatch(update_email(email)),
        update_zipcode: (zipcode) => dispatch(update_zipcode(zipcode))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);