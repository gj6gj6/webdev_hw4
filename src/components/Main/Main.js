import React from "react";
import { connect } from 'react-redux'
import Headline from './Headline'
import Follow from './Follow/Follow'
import Article from './Article/Article'

const Main = () => {


    return (
        <div className='container'>
            <div class='row'>
                <div class='col-4'>
                    <Headline/>
                    <Follow />
                </div>
                <div class='col-8'>
                    <Article />
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);