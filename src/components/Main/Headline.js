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
        <div class='border p-3 mb-5 shadow-lg bg-light'>
            <div class="d-flex justify-content-between">
                <button class="btn btn-secondary" onClick={() => {logout(); history.push({pathname: "/"})}}>Logout</button>
                <button class="btn btn-info" onClick={() => history.push({pathname: "/profile"})}>Profile Page</button>
            </div>  
            <br/>
            <br/>

            <img src={currUser.avatar} alt={''} class='img-fluid'/>
            
            <p>{currUser.username}</p>
            <p>{currUser.headline}</p>
            <div>
                <input class="form-control flex-fill input-lg" type="text" id="headline" placeholder="new status" />    
                <button class="btn btn-outline-primary btn-block" type="button" onClick={handleUpdateHeadline}>Update</button>
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
        logout: () => dispatch(logout()),
        updateHeadline: (headline) => dispatch(updateHeadline(headline))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Headline);