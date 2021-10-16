import React from 'react'
import { connect } from 'react-redux'
import { search } from '../../../actions'

// The component for the layout of the whole followers area
const Article =({articles_shown, search}) => {
        const handlePost = () => {

        }

        const handleSearch = () => {
            keyword = document.getElementById("search").value;
            search(keyword);
        }

        return (
		    <div>
                <form>
                    <div>
                        <textarea placeholder="Say something"></textarea>
                        <label className="btn btn-primary"> Upload an image file</label>
                        <input type="file" />	
                        <br/>
                        <input type="reset"  value="reset"/>
                        <input type="button" value="post" onClick={handlePost}/>
                        <div>
                            <div>Search: </div>
                            <input type="text" placeholder="keywords" id="search"  onChange={handleSearch}/>
                        </div>
                    </div>
                </form>
                <div>
                    {articles_shown.map((article, key) => (
                        <ArticleDiv key={key}
                            body={article.body} img={article.img} date={article.date} />
                        )
                    )}
                </div>
            </div>
        )
    }


    const mapStateToProps = (state) => {
        return {
            articles_shown: state.articles_shown
        }
    };
    
    const mapDispatchToProps = (dispatch) => {
        return {
            search: (keyword) => dispatch(search(keyword))
        }
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(Article);