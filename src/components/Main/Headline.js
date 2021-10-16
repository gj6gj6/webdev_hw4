import { connect } from 'react-redux';
import {logout} from '../../actions'
import { useHistory } from 'react-router';
import { updateHeadline } from '../../actions';


const Headline = ({currUser, logout, updateHeadline}) => {
    const history = useHistory();

    const handleUpdateHeadline = () => {
        const headline = document.getElementById('headline');
        updateHeadline(headline.value);
    }

    return (
        <div>
            <button onClick={() => {logout(); history.push({pathname: "/"})}}>Logout</button>
			<button onClick={() => history.push({pathname: "/profile"})}>Profile Page</button><br/>
            <img src={currUser.avatar} alt={''} height="150" width="150"/>
            <p>{currUser.username}</p>
            <p>{currUser.headline}</p>
            <form>
                <div>
                    <b>Update Status:</b>
                    <input type="text" id="headline" placeholder="new status" />
                    <button type="button" onClick={handleUpdateHeadline}>Update</button>
                </div>
            </form>
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
        logout: () => dispatch(logout()),
        updateHeadline: (headline) => dispatch(updateHeadline(headline))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Headline);