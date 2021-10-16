import React from "react";
import { connect } from 'react-redux'
import Headline from './Headline'
import Follow from './Follow/Follow'

const Main = () => {


    return (
        <div>
            <Headline/>
            <Follow />
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