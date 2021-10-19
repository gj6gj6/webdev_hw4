import React from "react";
import { connect } from 'react-redux';
import ProfileInfo from "./ProfileInfo";
import ProfileForm from "./ProfileForm";

const Profile = () => {

    return (
            <div className='container'>
                <div class='row'>
                    <div class='col-6'>
                        <ProfileInfo />
                    </div>
                    <div class='col-6'>
                        <ProfileForm/>
                    </div>
                </div>
            </div>
        )
}



const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);