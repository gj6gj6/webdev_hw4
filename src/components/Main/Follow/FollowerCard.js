import React from 'react'
import { connect } from 'react-redux'
import { removeFollower } from '../../../actions'

//The component for the layout of singer follower
const FollowerCard = ({ id, username, avatar, headline, removeFollower}) => {
    return(
        <div>
            <img src={avatar} alt={""} className="img-thumbnail img-responsive" height="150" width="150"/>
            <div>{username}</div>
            <div>{headline}</div>
            <input type='button' value='Unfollow' onClick={() => {removeFollower(id)}} />
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