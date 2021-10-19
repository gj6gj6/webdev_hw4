import React from 'react'
import { connect } from 'react-redux'
import { addFollower } from '../../../actions'
import FollowerCard from './FollowerCard'

// The component for the layout of the whole followers area
const Follow =({followers, addFollower}) => {
        const handleAddFollower = () => {
            const newFollower = document.getElementById("addFollower");
            if (newFollower.value !== '') {
                addFollower(newFollower.value)
                newFollower.value=''
            }
        }

        return (
		    <div>
                <div class="border p-3 mb-3 shadow-lg bg-light">
                    <input class="form-control flex-fill input-lg" type="text" id="addFollower" placeholder="Add Follower"/>
                    <input class="btn btn-outline-primary btn-block" type="button" value="Add" onClick={handleAddFollower}/>
                </div>
                <div>
                    {followers.map((follower, key) => {
                        return (
                            <FollowerCard key={key} id={follower.id} 
                            username={follower.username} avatar={follower.avatar} headline={follower.headline} />
                            )
                        }
                    )}
                </div>
            </div>
        )
    }


    const mapStateToProps = (state) => {
        return {
            followers: state.followers
        }
    };
    
    const mapDispatchToProps = (dispatch) => {
        return {
            addFollower : (username) => dispatch(addFollower(username))
        }
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(Follow);