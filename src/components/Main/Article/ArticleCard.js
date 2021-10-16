import React from 'react'
import { connect } from 'react-redux'
import { removeFollower } from '../../../actions'

//The component for the layout of singer arcticle
const ArticleCard = ({ body, img, date}) => {
    return(
        <div>
            <div className="panel panel-default">
                <div className="panel-heading">{author} said on {date}:</div>
                <div className="panel-body">
                <p>{text}</p>
                <div>
                <img src={ img } className="img-thumbnail img-responsive"/>
                <br/>
                <button type="button" className="btn btn-primary">Edit</button>
                <button type="button" className="btn btn-primary">Comment</button>
                <br/>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCard);