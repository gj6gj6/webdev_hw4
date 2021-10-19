import React from "react";
import { connect } from 'react-redux';
import { useHistory } from 'react-router';


const ProfileInfo = ({currUser}) => {
	const history = useHistory();

    return (
            <div>
				<button class="btn btn-info mb-2" onClick={() => history.push({pathname: "/main"})}>Main Page</button>
				<p><img src={currUser.avatar} alt={""} class='img-fluid w-50'/></p>
				<p><input type="file" id="imagefile"/></p>
				<div class='border p-3 shadow-lg bg-light'>
					<h2>Current Info</h2>
					<div className="form-group row">
						<b> Name:</b>
						<div>{currUser.username}</div>  
					</div>
					<div className="form-group row">
						<b>Email:</b>
						<div>{currUser.email}</div>
					</div>
					<div className="form-group row">
						<b>Phone number:</b>
						<div>{currUser.phone}</div>
					</div>
					<div className="form-group row">
						<b>Zipcode:</b>
						<div>{currUser.zipcode}</div>  
					</div>
					<div className="form-group row">
						<b>Password:</b>
						<div>{'*'.repeat(currUser.password.length)}</div>  
					</div>
				</div>
            </div>
        )
}



const mapStateToProps = (state) => {
    return {
        currUser: state.currUser
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);