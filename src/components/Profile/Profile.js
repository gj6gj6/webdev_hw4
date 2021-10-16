import React from "react";
import { connect } from 'react-redux';

class Profile extends React.Component {

    render() {
        return (
            <div>
                This is the profile page
            </div>
        )
    }
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