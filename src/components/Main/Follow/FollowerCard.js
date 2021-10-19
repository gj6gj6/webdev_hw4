import React from 'react'
import { connect } from 'react-redux'
import { removeFollower } from '../../../actions'

//The component for the layout of singer follower
const FollowerCard = ({ id, username, avatar, headline, removeFollower}) => {
    return(
        <div class='border p-3 mb-3 shadow-lg bg-light'>
            <img src={avatar} alt={""} class='img-fluid'/>
            <div>{username}</div>
            <div>{headline}</div>
            <div class='text-center'>
                <input class="btn btn-danger btn-sm text-center" type='button' value='Unfollow' onClick={() => {removeFollower(id)}} />
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
        removeFollower : (id) => dispatch(removeFollower(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowerCard);