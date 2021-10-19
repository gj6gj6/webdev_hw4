import React from 'react'
import { connect } from 'react-redux'

//The component for the layout of singer arcticle
const ArticleCard = ({ body, img, timestamp, author}) => {
    return(
        <div class='border p-3 mb-2 shadow-lg bg-light"'>
            <img src={img} alt={''} class='img-fluid w-50'/>
            <br/>
            <p>Author: {author}</p>
            <p>{body}</p>
            <p>{timestamp.toLocaleString()}</p>
            <div class="d-flex justify-content-start">
                <button class="btn btn-outline-primary btn-sm mr-2" type="button">Edit</button>
                <button class="btn btn-outline-primary btn-sm" type="button">Comment</button>
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